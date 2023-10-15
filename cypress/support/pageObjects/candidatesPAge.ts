
class RecruitmentTab {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        PIMbtn: () => cy.get(':nth-child(5) > .oxd-main-menu-item'),
        EId: () => cy.get(':nth-child(2) > .oxd-input'),

    }

    selectRecruitment() {
        this.elements.MainMenuItems().contains('Recruitment').click();
    }
    verifyCandidateRowsCount(tableSelector, expectedRowCount) {
        cy.get(tableSelector)
        .find('tbody tr')
        .should('have.length', expectedRowCount);
}
}

export default RecruitmentTab