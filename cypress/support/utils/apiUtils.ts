import { ICreateEmployeePayload } from "../API/payload/userAPIPayload";
import { ICreateEmployeeResponse } from "../API/response/userAPIResponse";


declare global {
    namespace Cypress {

        interface Chainable {

            addNewUser: (requestUrl: string, userPayload: ICreateEmployeePayload) => Chainable<ICreateEmployeeResponse>

        }
    }
}

Cypress.Commands.add('addNewUser', (requestUrl: string, userPayload: ICreateEmployeePayload) => {

    return cy.api({
        method: 'POST',
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).its('body')

})