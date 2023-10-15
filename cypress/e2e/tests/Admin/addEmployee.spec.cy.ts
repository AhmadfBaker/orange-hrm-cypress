import loginPage from "../../../pageObjects/Pages/loginPage1";
import addEmployee from "../../../support/pageObjects/addEmployee"
const loginObj: loginPage = new loginPage();
const addEmp: addEmployee = new addEmployee();

describe("Employee Functionality", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
        loginObj.checkLogin("Admin", "admin123");
        cy.fixture('employeeInfo').as('EmpInfo')
    })
    it("Employee - Add New employee via UI", () => {
        cy.get('@EmpInfo').then((infoData: any) => {
            addEmp.addNewEmployee(infoData.FirstName, infoData.MiddleName, infoData.LastName)
        })
       
    })


})
