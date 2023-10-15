import adminTab from "../../../pageObjects/Pages/adminTab";
import loginPage from "../../../pageObjects/Pages/loginPage1";
const adminObj:adminTab = new adminTab (); 
const loginObj:loginPage = new loginPage();
describe(`Test the admin tab`, {tags: '@smoke'}, ()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        adminObj.chooseAdmin()
        
        
        cy.wrap(null).then(() => {
            adminObj.storeRecourde();
        });
    })
    it.only("search by user name",()=>{
        cy.wrap(null).then(() => {
            adminObj.checkSearch({key:"Username",value:"Admin"},{key:"UserRole",value:"Admin"},{key:"Status",value:"Enabled"});//{key:"EmployeeName",value:"Paul Collings"},
          });
        
    })
    it.only("check the tabel",()=>{
        cy.wrap(null).then(() => {
            adminObj.checkTabel();
          });
        
    })
})


