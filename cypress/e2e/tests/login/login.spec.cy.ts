describe("Login functionality", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('input[name="username"]').should("be.visible");
  });

  it("TC01: Should log in successfully with valid username and password", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("TC02: Should show error for valid username and invalid password", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC03: Should show error for invalid username and valid password", () => {
    cy.get('input[name="username"]').type("WrongUser");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC04: Should show error for invalid username and invalid password", () => {
    cy.get('input[name="username"]').type("WrongUser");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

  it("TC05: Should show required message when username is empty and password is valid", () => {
    cy.get('input[name="username"]').clear();
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").first().should("contain", "Required");
  });

  it("TC06: Should show required message when username is empty and password is invalid", () => {
    cy.get('input[name="username"]').clear();
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").first().should("contain", "Required");
  });

  it("TC07: Should show required message when password is empty and username is valid", () => {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').clear();
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").last().should("contain", "Required");
  });

  it("TC08: Should show required message when password is empty and username is invalid", () => {
    cy.get('input[name="username"]').type("WrongUser");
    cy.get('input[name="password"]').clear();
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").last().should("contain", "Required");
  });

  it("TC09: Should show required messages when both username and password are empty ", () => {
    cy.get('input[name="username"]').clear();
    cy.get('input[name="password"]').clear();
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").eq(0).should("contain", "Required");
    cy.get(".oxd-input-group__message").eq(1).should("contain", "Required");
  });

  it("TC10: Should mask password input by default", () => {
    cy.get('input[name="password"]').should("have.attr", "type", "password");
  });

  it("TC11: Should allow login with uppercase username", () => {
    cy.get('input[name="username"]').clear().type("ADMIN");
    cy.get('input[name="password"]').clear().type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
    cy.get(".oxd-userdropdown-tab").click();
    cy.contains("Logout").click();
  });

  it("TC12: Should not allow login with uppercase password", () => {
    cy.get('input[name="username"]').clear().type("Admin");
    cy.get('input[name="password"]').clear().type("ADMIN123");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid credentials").should("be.visible");
  });

});
