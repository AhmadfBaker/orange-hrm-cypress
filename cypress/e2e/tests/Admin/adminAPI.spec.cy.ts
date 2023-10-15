import adminTab from "../../../pageObjects/Pages/adminTab";
import loginPage from "../../../pageObjects/Pages/loginPage1";
import userPayload from "../../../pageObjects/Pages/userPayload";
const adminObj: adminTab = new adminTab();
const loginObj: loginPage = new loginPage();
describe("Admin: Test the admin tab", () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login');
        loginObj.checkLogin("Admin", "admin123");
        adminObj.chooseAdmin()

    })
    it("Admin - test add user in admin tab", () => {
        {
            let data: userPayload = {
                username: "mohsenEmad",
                password: "1234567mM",
                status: true,
                userRoleId: 1,
                empNumber: 2
            }
            adminObj.addUserByAPI(data)
        }
    })

    it('Verify Login response', () => {
        cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations')
            .then((response) => {
                // https://on.cypress.io/assertions
                expect(response).property('status').to.equal(200)
                //expect(response.body).to.have.property('id', '1')
                //expect(response).to.include.keys('headers', 'Content-Type')
            })
    })

    it.only('Verify Login response', () => {
        cy.request({
            method: 'POST',
            url: '/web/index.php/api/v2/admin/users',
            body:
            {
                username: 'xTest User1',
                password: 'a123456',
                status: true,
                userRoleId: 2,
                empNumber: 2
            }
        }).then((response) => {
            expect(response).property('status').to.equal(200)


        })
    })
})