import LoginPage from '../../../support/pageObjects/LoginPage';
import dashboardPage from '../../../support/pageObjects/dashboardPage';
import RecruitmentTab from '../../../support/pageObjects/candidatesPAge'
import selectRecruitment from '../../../support/pageObjects/candidatesPAge'
//const DashboardPage:dashboardPage = new dashboardPage (); 
const recruitmentTab:RecruitmentTab = new RecruitmentTab (); 
const SelectRecruitment:selectRecruitment = new selectRecruitment()
describe('Login Home Page', () => {

    beforeEach(function() {
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        LoginPage.login("Admin","admin123")
        recruitmentTab.selectRecruitment()

        //cy.login("Admin","admin123")

    })

    //First Test Case
    it.only('Valid Login', ()=> { 
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?**')
            .then((response) => {
                expect(response).property('status').to.equal(200)
                //expect(response).property('status').to.equal(200)
                // cy.log(response.meta.total)
                recruitmentTab.verifyCandidateRowsCount('test',50)
                //expect(response.body).to.have.property('id', '1')
                //expect(response).to.include.keys('headers', 'Content-Type')
            })
        //cy.verifyTableRowsCount(recruitmentTableSelector, expectedRowCount);
        
    })



})