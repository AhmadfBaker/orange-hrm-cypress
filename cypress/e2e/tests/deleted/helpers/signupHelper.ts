import { resolve } from "cypress/types/bluebird";
import EmployeeInit from "e2e/tests/deleted/Initializer/employeeInt";
import { ICreateEmployeePayload } from "e2e/tests/deleted/payload/employeeAPIPayload";
import { ICreateEmployeeResponse } from '../response/employeeAPIResponse'
const baseUrl = Cypress.config().baseUrl

export const URLs = {
    users: `${baseUrl}/api/users`
}

export default class addUser {

    static conduitNewUserUsingAPI(username: string, email: string, password: string) {

        cy.api({
            method: 'POST',
            url: URLs.users,
            body:
            {

                user: {
                    username: username,
                    email: email,
                    password: password
                }

            }
        })
    }
    static conduitNewUserUsingAPI2(apipayload) {
        return cy.api({
            method: 'POST',
            url: URLs.users,
            body: apipayload
        })

    }
    // static initEmployee(): ICreateEmployeePayload {
    //     cy.apiRequest(URLs.users, )
    //     let createEmployeePayload: ICreateEmployeePayload = {
    //         user: {
    //             email: `email_${Math.round(10000 * (Math.random()))}@gmail.com`,
    //             password: '123',
    //             username: `ahmad${Math.round(10000 * (Math.random()))}`
    //         }

    //     }

    //     return createEmployeePayload
    // }

    static addNewEmployeeViaAPI() {
        return new Cypress.Promise<ICreateEmployeeResponse>(resolve => {
            // const employeeDiePayload = this.addNewEmployeeViaAPI();
             cy.addNewEmployee(URLs.users, EmployeeInit.initEmployee()).then(resolve);

            })
        // })
    }
}

