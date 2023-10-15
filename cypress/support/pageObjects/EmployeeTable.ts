import Table from "./Tabel"
import keyVal from "../../interfaces/keyVal"
const tableObj: Table = new Table()

class PIMtab {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        PIMbtn: () => cy.get(':nth-child(2) > .oxd-main-menu-item'),
        EId: () => cy.get(':nth-child(2) > .oxd-input'),
        EmployeeName: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        SupervisorName: () => cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input'),
        searchBtn: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        addEmp: () => cy.get('.orangehrm-header-container > .oxd-button'),
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        saveNewEmp: () => cy.get('.oxd-button--secondary')
    }

    selectPIM() {
        this.elements.MainMenuItems().contains('PIM').click();
    }
    checkSearch(arr: keyVal[]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].key == "Id") {
                this.elements.EId().type(arr[i].value)
            }
            else if (arr[i].key == "EmployeeName") {
                this.elements.EmployeeName().type(arr[i].value)
            }
            else if (arr[i].key == "SupervisorName") {
                this.elements.SupervisorName().type(arr[i].value)
            }
        }
        this.elements.searchBtn().click({ force: true })
    }
}

export default PIMtab