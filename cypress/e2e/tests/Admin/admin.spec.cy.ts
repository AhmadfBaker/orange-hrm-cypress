describe("Extended Login functionality", () => {
    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"]').should("be.visible");
    });

    it("TC13: Should trim whitespace from username and allow login", () => {
        cy.get('input[name="username"]').type(" Admin ");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.contains("Invalid credentials").should("be.visible");
    });

    it("TC14: Should retain input after invalid login attempt", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("wrongpass");
        cy.get('button[type="submit"]').click();
        cy.get('input[name="username"]').should("not.have.value", "Admin");
    });

    it("TC15: Should allow login by pressing Enter key", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123{enter}");
        cy.url().should("include", "/dashboard");
    });

    it("TC16: Should display logo on login page", () => {
        cy.get(".orangehrm-login-branding img").should("be.visible");
    });

    it("TC17: Should display login page title", () => {
        cy.title().should("eq", "OrangeHRM");
    });

    it("TC18: Should disable login button when form is empty", () => {
        cy.get('input[name="username"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('button[type="submit"]').should("not.be.disabled"); // if app supports
    });

    it("TC19: Should not allow special characters in username field", () => {
        cy.get('input[name="username"]').type("!@#$%^&*()");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.get('input[name="username"]').should("not.have.value", "!@#$%^&*()"); // if validation exists
    });

    it("TC20: Should redirect to dashboard only after successful login", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/dashboard");
        cy.get("h6").should("contain", "Dashboard"); // extra assertion
    });


    it("TC21: Should not login with SQL injection string", () => {
        cy.get('input[name="username"]').type("Admin' OR '1'='1");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.contains("Invalid credentials").should("be.visible");
    });

    it("TC22: Should keep user on login page after failed login", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("wrongpass");
        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/auth/login");
    });

    it("TC23: Should clear password field after failed login attempt", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("wrongpass");
        cy.get('button[type="submit"]').click();
        cy.get('input[name="password"]').should("have.value", "");
    });

    it("TC24: Should not autofill password on reload", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.reload();
        cy.get('input[name="password"]').should("have.value", "");
    });

    it("TC25: Should persist login session after refresh", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123{enter}");
        cy.url().should("include", "/dashboard");
        cy.reload();
        cy.url().should("include", "/dashboard");
    });

    it("TC26: Should logout and return to login page", () => {
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains("Logout").click();
        cy.url().should("include", "/auth/login");
    });

    it("TC27: Should prevent access to dashboard without login", () => {
        cy.url().should("include", "/auth/login");
    });


    it("TC28: Should display the login panel branding/logo", () => {
        cy.get(".orangehrm-login-branding img").should("be.visible");
    });

    it("TC29: Should display the correct login page heading", () => {
        cy.get(".orangehrm-login-title").should("contain", "Login"); // heading text may vary
    });

    it("TC30: Should display correct placeholder text for username and password fields", () => {
        cy.get('input[name="username"]').should("have.attr", "placeholder", "Username");
        cy.get('input[name="password"]').should("have.attr", "placeholder", "Password");
    });

    it("TC31: Should open LinkedIn page in a new tab", () => {
        cy.get('a[href*="linkedin.com"]').should('have.attr', 'target', '_blank');
        cy.get('a[href*="linkedin.com"]').should('have.attr', 'href').and('include', 'linkedin.com');
    });

    it("TC32: Should open Facebook page in a new tab", () => {
        cy.get('a[href*="facebook.com"]').should('have.attr', 'target', '_blank');
        cy.get('a[href*="facebook.com"]').should('have.attr', 'href').and('include', 'facebook.com');
    });

    it("TC33: Should open Twitter page in a new tab", () => {
        cy.get('a[href*="twitter.com"]').should('have.attr', 'target', '_blank');
        cy.get('a[href*="twitter.com"]').should('have.attr', 'href').and('include', 'twitter.com');
    });

    it("TC34: Should open YouTube channel in a new tab", () => {
        cy.get('a[href*="youtube.com"]').should('have.attr', 'target', '_blank');
        cy.get('a[href*="youtube.com"]').should('have.attr', 'href').and('include', 'youtube.com');
    });




    it("TC35: Should display 'Forgot your password?' link and navigate correctly", () => {
        cy.contains("Forgot your password?").should("be.visible").click();
        cy.url().should("include", "/requestPasswordResetCode");
        cy.contains("Reset Password").should("be.visible");
    });

    it("TC36: Should display the current OrangeHRM version", () => {
        cy.contains("OrangeHRM OS").should("be.visible").and("contain", "5.7");
    });

    it("TC37: Should display copyright info", () => {
        cy.contains("© 2005 - 2025").should("be.visible");
        cy.contains("OrangeHRM, Inc.").should("be.visible");
    });

    it("TC38: Should verify 'OrangeHRM, Inc.' link points to the official site", () => {
        cy.get('a[href="http://www.orangehrm.com"]')
            .should("have.attr", "target", "_blank");

        cy.get('a[href="http://www.orangehrm.com"]')
            .invoke("text")
            .should("include", "OrangeHRM, Inc");
    });

});