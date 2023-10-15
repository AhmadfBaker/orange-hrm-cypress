import loginPage from "../../../pageObjects/Pages/loginPage1";
import PIMtab from "../../../support/pageObjects/EmployeeTable";

const LoginPage: loginPage = new loginPage();
const EmployeeTable: PIMtab = new PIMtab();
describe("Employee: Test the admin tab", () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
        LoginPage.checkLogin("Admin", "admin123");
        EmployeeTable.selectPIM()
    })
    it("Employee - search by key value - Employee", () => {
        cy.get('.oxd-loading-spinner').should('not.exist')
        cy.get('.oxd-userdropdown-link')
        EmployeeTable.checkSearch([{ key: "Id", value: "0066" }]);

    })
    it("Employee - Verify overall rows count", () => {
        cy.wait(2000)
        var length = 0
        for (let n = 0; n < 1; n++) {
            cy.get('.oxd-table-body').children().each((row)=>{
                length += row.length
                console.log(length)
                cy.get(':nth-child(2) > .oxd-pagination-page-item').click()

                if (n == 1) {
                    cy.get('a[aria-label=Next]').invoke('css', 'pointer-events').should('equal', 'none')
                    cy.get(':nth-child(2) > .oxd-pagination-page-item').invoke('css', 'pointer-events').should('equal', 'none')
                    expect(length).to.eq(90)

                }

                // else {
                //     cy.get(':nth-child(2) > .oxd-pagination-page-item').click()
                // }
            })

        }


    })

    it('Changing the DOM',() => {
        cy.wait(1000)
        cy.get('.oxd-dropdown-menu').invoke('show').click()

    })
})




