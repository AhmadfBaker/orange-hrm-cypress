import { reject, resolve } from 'cypress/types/bluebird'
import { ICreateEmployeeResponse } from 'support/API/response/userAPIResponse'
import userInit from '../init/userInit'
const baseUrl = Cypress.config().baseUrl

export const URLs = {
    users: `${baseUrl}/api/users`
}

export default class addUser {

    static addNewUserViaAPI() {
        return new Cypress.Promise<ICreateEmployeeResponse>((resolve:any, reject:any) => {
            
            cy.addNewUser(URLs.users, userInit.initUser()).then(() =>{
                 resolve('test')
             })
             
        })
       
    }
    
}