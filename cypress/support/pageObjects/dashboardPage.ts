const data = require("../../fixtures/loginUser.json");

class dashboardPage {
  elements = {
    dashboardSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    adminBtn: () => cy.contains("Admin"),
    myInfoBtn: () => cy.contains("My Info"),
    userDropdownIcon: () => cy.get(".oxd-userdropdown-tab > .oxd-icon"),
  };

  validateBreadcrumbText() {
    this.elements.dashboardSpan().should("have.text", data.expected);
  }

  clickAdminBtn() {
    this.elements.adminBtn().click();
  }

  clickMyInfoBtn() {
    this.elements.myInfoBtn().click();
  }

  navigateToUserDropdown() {
    this.elements.userDropdownIcon().click();
  }

}
// module.exports = new dashboardPage();

export default dashboardPage
