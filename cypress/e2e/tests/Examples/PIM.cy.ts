import loginPage from "../../../pageObjects/Pages/loginPage1";
import PIMtab from "../../../pageObjects/Pages/PIMTab";
const loginObj:loginPage = new loginPage();
const PIMobj:PIMtab = new PIMtab (); 
describe("Test the admin tab",()=>{
    beforeEach(()=>{
        cy.visit('/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        //PIMobj.choosePIM()
        
        // cy.wrap(null).then(() => {
        //     PIMobj.storeData();
        // });
    })
    it("search by user name",()=>{
       // cy.wrap(null).then(() => {
            PIMobj.checkSearch({key:"Id",value:"0066"});
            
          //});
        
    })
    it("check the tabel",()=>{
        cy.wrap(null).then(() => {
            PIMobj.checkTabel();
          });
        
    })
    it("add new Employee",()=>{
        cy.wrap(null).then(() => {
            PIMobj.addNewEmployee("Ahmad","Fayyad","Baker");
          });
        
    })

    it.only("Verify Employee data", () => {
        let jobId = 23;
        cy.request(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&jobTitleId=${jobId}&sortField=employee.firstName&sortOrder=ASC`)
    })

})
