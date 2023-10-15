class addEmployee
{
    elements={
    
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AddEmp: () => cy.get('.oxd-button--secondary'),
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        saveNewEmp: () => cy.get('button[type="submit"]'),
        PIMbtn :()=> cy.get(':nth-child(2) > .oxd-main-menu-item'),
        EId :()=>cy.get(':nth-child(2) > .oxd-input'),
        EmployeeName:()=>cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        SupervisorName:()=> cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input'),
        searchBtn:()=>cy.get('.oxd-form-actions > .oxd-button--secondary'),
        addEmp:()=>cy.get('.orangehrm-header-container > .oxd-button'),
    }
    

    addNewEmployee(firstName:string, MiddleName:string, LastName:string){
     this.elements.MainMenuItems().contains('PIM').click();
     this.elements.AddEmp().eq(1).click()
     this.elements.EmployeeInputName().children().eq(0).type(firstName)
     this.elements.EmployeeInputName().children().eq(1).type(MiddleName)
     this.elements.EmployeeInputName().children().eq(2).type(LastName)
    }

}
export default addEmployee; 