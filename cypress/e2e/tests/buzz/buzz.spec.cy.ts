describe("Buzz Module - User post interactions", () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.get(".oxd-topbar-header-title").should("contain", "Dashboard");
        cy.get(".oxd-main-menu-item").contains("Buzz").click();
    });

    it("TC15: Should create a new buzz post and verify the text appears", () => {
        cy.get('.oxd-buzz-post-input').type('Hello all. My Name is Ahmad Baker');
        cy.get(".oxd-buzz-post-slot").click();
        cy.intercept("/web/index.php/api/v2/buzz/feed**").as("buzzFeed");
        cy.get(".oxd-main-menu-item").contains("Buzz").click();
        cy.wait("@buzzFeed");
        //cy.get(".oxd-toast").should("contain", "Successfully Saved");

        //cy.get(".oxd-toast").should('not.exist')
        cy.then(() => {
            cy.get(".orangehrm-buzz-post-body").eq(0).should("contain", 'Hello all. My Name is Ahmad Baker');

        })
    });

    it("TC16: Should create and edit a buzz post, then verify toast message", () => {
        cy.get('.oxd-buzz-post-input').type('Hello all. My Name is Ahmad Baker');
        cy.get(".oxd-buzz-post-slot").click();
        cy.then(() => {
            cy.get(".oxd-toast").should("contain", "Successfully Saved");
        })
        cy.then(() => {
            cy.get(".orangehrm-buzz-post-body").eq(0).should("contain", 'Hello all. My Name is Ahmad Baker');

        })
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-buzz-post > .orangehrm-buzz-post-header > .orangehrm-buzz-post-header-config > li > .oxd-icon-button').click();
        cy.get(".oxd-dropdown-menu").contains('Edit').click();
        cy.get('.orangehrm-buzz-post-modal-header-text > .oxd-buzz-post > .oxd-buzz-post-input').clear().type('Post has been updated by Ahmad Baker');
        cy.get('.oxd-form-actions > .oxd-button').contains('Post').click();
        cy.get(".oxd-toast").should("contain", "Successfully Saved");
        cy.then(() => {
            cy.get(".orangehrm-buzz-post-body").eq(0).should("contain", 'Post has been updated by Ahmad Baker');
        })
    });

    it("TC17: Should create and delete a buzz post, then verify toast message", () => {
        cy.get('.oxd-buzz-post-input').type('Hello all. My Name is Ahmad Baker');
        cy.get(".oxd-buzz-post-slot").click();
        cy.then(() => {
            cy.get(".oxd-toast").should("contain", "Successfully Saved");
        })
        cy.then(() => {
            cy.get(".orangehrm-buzz-post-body").eq(0).should("contain", 'Hello all. My Name is Ahmad Baker');

        })
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-buzz-post > .orangehrm-buzz-post-header > .orangehrm-buzz-post-header-config > li > .oxd-icon-button').click();
        cy.get(".oxd-dropdown-menu").contains('Delete').click();
        cy.get('.oxd-button--label-danger').click()
        cy.then(() => {
            cy.get(".oxd-toast").should("contain", "Successfully Saved");
        })
    });
});
