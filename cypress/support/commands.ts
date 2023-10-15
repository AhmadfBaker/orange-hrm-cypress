// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { ICreateEmployeePayload } from "../e2e/tests/deleted/payload/employeeAPIPayload";
import { ICreateEmployeeResponse } from "../e2e/tests/deleted/response/employeeAPIResponse";




declare global {
    namespace Cypress {

        interface Chainable {
            EmployeeTable: any
            getByCy: any,
            getByPlaceHolder: typeof getByPlaceHolder,
            login: any;
            // addNewEmployee: (requestUrl: string, employeeePayload: ICreateEmployeePayload) => Chainable<ICreateEmployeeResponse>

        }
    }
}


function getByCy(field: string) {
    return cy.get('[data-cy="' + field + '"]')
}
function getByPlaceHolder(field: string) {
    return cy.get('[placeholder="' + field + '"]')
}

Cypress.Commands.add('getByCy', getByCy)
Cypress.Commands.add('getByPlaceHolder', getByPlaceHolder)

function login(username: string, password: string) {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.config("baseUrl"));

    // Enter the username and password
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);

    // Submit the login form
    cy.get('button[type="submit"]').click();

}
Cypress.Commands.add("login", login);


// Cypress.Commands.add('addNewEmployee', (requestUrl: string, employeeePayload: ICreateEmployeePayload) => {

//     return cy.api({
//         method: 'POST',
//         url: requestUrl,
//         body: employeeePayload,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).its('body')

// })
