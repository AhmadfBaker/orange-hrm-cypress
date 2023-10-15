import LoginPage from '../../../support/pageObjects/LoginPage';
import dashboardPage from '../../../support/pageObjects/dashboardPage';


const tests = require("../../../fixtures/loginUsers");
const DashboardPage:dashboardPage = new dashboardPage (); 

describe('Login Home Page', () => {

    beforeEach(function() {
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/')

    })

    //First Test Case
    it('Valid Login', ()=> { 
       LoginPage.login("Admin","admin123")
        cy.login("Admin","admin123")
        
        //cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard')
    })

    tests.forEach((test) =>{
        it(test.name, () =>{
            LoginPage.login("Admin","admin123")

            if (test.name === "should login to Dashboard page") {
                DashboardPage.validateBreadcrumbText()
              } else {
                LoginPage.getErrorMsg();
              }
        })
    })
    


})