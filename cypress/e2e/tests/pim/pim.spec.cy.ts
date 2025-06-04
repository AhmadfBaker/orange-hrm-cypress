
import { faker } from '@faker-js/faker';

describe("PIM Module - Employee management functionality", () => {

  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-topbar-header-title").should("contain", "Dashboard");
    cy.get(".oxd-main-menu-item").contains("PIM").click();
  });

  it("TC11: Should add a new employee without login details", () => {
    const employee = {
      firstName: faker.person.firstName(),
      middleName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      employeeId: faker.string.numeric({ length: 7, allowLeadingZeros: false }),
      username: faker.internet.userName(),
      password: faker.string.alphanumeric(5) + faker.string.numeric(3)
    };
    cy.get(".oxd-button").contains("Add").click();
    cy.get("input[name='firstName']").type(employee.firstName);
    cy.get("input[name='middleName']").type(employee.middleName);
    cy.get("input[name='lastName']").type(employee.lastName);
    cy.get(".oxd-input-group input.oxd-input").eq(3).clear().type(employee.employeeId);
    cy.get(".oxd-button").contains("Save").click();
    cy.get(".oxd-toast").should("contain", "Successfully Saved");
  });

  it("TC12: Should add a new employee with login credentials", () => {
    const employee = {
      firstName: faker.person.firstName(),
      middleName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      employeeId: faker.string.numeric({ length: 7, allowLeadingZeros: false }),
      username: faker.internet.userName(),
      password: faker.string.alphanumeric(5) + faker.string.numeric(3)
    };
    cy.get(".oxd-button").contains("Add").click();
    cy.get("input[name='firstName']").type(employee.firstName);
    cy.get("input[name='middleName']").type(employee.middleName);
    cy.get("input[name='lastName']").type(employee.lastName);
    cy.get(".oxd-input-group input.oxd-input").eq(3).clear().type(employee.employeeId);

    // Toggle login details
    cy.get(".oxd-switch-input").click();
    cy.get(":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.username);
    cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);
    cy.get(".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);

    cy.get(".oxd-button").contains("Save").click();
    cy.get(".oxd-toast").should("contain", "Successfully Saved");
  });

  it("TC13: Should search for an employee by ID after adding", () => {
    const employee = {
      firstName: faker.person.firstName(),
      middleName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      employeeId: faker.string.numeric({ length: 7, allowLeadingZeros: false }),
      username: faker.internet.userName(),
      password: faker.string.alphanumeric(5) + faker.string.numeric(3)
    };
    cy.get(".oxd-button").contains("Add").click();
    cy.get("input[name='firstName']").type(employee.firstName);
    cy.get("input[name='middleName']").type(employee.middleName);
    cy.get("input[name='lastName']").type(employee.lastName);
    cy.get(".oxd-input-group input.oxd-input").eq(3).clear().type(employee.employeeId);

    // Toggle login details
    cy.get(".oxd-switch-input").click();
    cy.get(":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.username);
    cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);
    cy.get(".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);

    cy.get(".oxd-button").contains("Save").click();
    cy.get(".oxd-toast").should("contain", "Successfully Saved");
    //search for the employee
    cy.get(".oxd-topbar-body-nav-tab-item").contains("Employee List").click();
    cy.get(':nth-child(2) > .oxd-input').type(employee.employeeId)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

    cy.then(() => {

      cy.get(".oxd-table-card .oxd-table-row").should("exist");
    });


  });

  it("TC14: Should show error if username already exists when creating login", () => {
    const employee = {
      firstName: faker.person.firstName(),
      middleName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      employeeId: faker.string.numeric({ length: 7, allowLeadingZeros: false }),
      username: faker.internet.userName(),
      password: faker.string.alphanumeric(5) + faker.string.numeric(3)
    };
    cy.get(".oxd-button").contains("Add").click();
    cy.get("input[name='firstName']").type(employee.firstName);
    cy.get("input[name='middleName']").type(employee.middleName);
    cy.get("input[name='lastName']").type(employee.lastName);
    cy.get(".oxd-input-group input.oxd-input").eq(3).clear().type(employee.employeeId);

    // Toggle login details 1 
    cy.get(".oxd-switch-input").click();
    cy.get(":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.username);
    cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);
    cy.get(".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);

    cy.get(".oxd-button").contains("Save").click();
    cy.get(".oxd-toast").should("contain", "Successfully Saved");
    cy.then(() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get(".oxd-main-menu-item").contains("PIM").click();
      cy.get(".oxd-button").contains("Add").click();
      cy.get("input[name='firstName']").type(employee.firstName);
      cy.get("input[name='middleName']").type(employee.middleName);
      cy.get("input[name='lastName']").type(employee.lastName);
      cy.get(".oxd-input-group input.oxd-input").eq(3).clear().type(employee.employeeId);
      cy.get(".oxd-switch-input").click();
      // Toggle login details 2
      cy.get(":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.username);
      cy.get(".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);
      cy.get(".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(employee.password);
      cy.get(".oxd-button").contains("Save").click();
      cy.get('.oxd-input-group .oxd-text').should('contain', 'Username already exists');

    });

  });
});
