import { ICreateEmployeePayload } from "../payload/employeeAPIPayload";
import { ICreateEmployeeResponse } from "../response/employeeAPIResponse";


declare global {
    namespace Cypress {

        interface Chainable {

            addNewEmployee: (requestUrl: string, employeeePayload: ICreateEmployeePayload) => Chainable<ICreateEmployeeResponse>

        }
    }
}

Cypress.Commands.add('addNewEmployee', (requestUrl: string, employeeePayload: ICreateEmployeePayload) => {

    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: employeeePayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')

})