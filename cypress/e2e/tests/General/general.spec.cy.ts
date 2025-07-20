describe("Main Navigation - Module Access and Page Validation", () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.get(".oxd-topbar-header-title").should("contain", "Dashboard");
    });

    it("TC46: Should navigate to Time module and validate page", () => {
        cy.get(".oxd-main-menu-item").contains("Time").click();
        cy.url().should("include", "/time/viewEmployeeTimesheet");
        cy.get('.oxd-topbar-header-title').should("contain", "Time"); 
    });

    it("TC47: Should navigate to Recruitment module and validate page", () => {
        cy.get(".oxd-main-menu-item").contains("Recruitment").click();
        cy.url().should("include", "/recruitment/viewCandidates");
        cy.get('.oxd-topbar-header-title').should("contain", "Recruitment");
    });


    it("TC48: Should navigate to My Info module and validate page", () => {
        cy.get(".oxd-main-menu-item").contains("My Info").click();
        cy.url().should("include", "/pim/viewPersonalDetails/");
        cy.get('.orangehrm-edit-employee-navigation').should("contain", "Personal Details");
    });


    it("TC49: Should navigate to Performance module and validate page", () => {
        cy.get(".oxd-main-menu-item").contains("Performance").click();
        cy.url().should("include", "/performance/searchEvaluatePerformanceReview");
        cy.get('.oxd-topbar-header-title').should("contain", "Performance");
    });


    it("TC50: Should navigate to Directory module and validate page", () => {
        cy.get(".oxd-main-menu-item").contains("Directory").click();
        cy.url().should("include", "/directory/viewDirectory");
        cy.get('.oxd-topbar-header-title').should("contain", "Directory");
    });

});
