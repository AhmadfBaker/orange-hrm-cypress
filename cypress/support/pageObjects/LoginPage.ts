const data = require("../../fixtures/loginUsers");

const elements = {

    userName: 'Username',
    password: 'Password',
    loginBtn: 'button',
    errorMsg: 'div[role="alert"]',

}
export default class LoginPage {
    static getErrorMsg() {
        cy.get(elements.errorMsg).should(data.expected)
    }


    // elements={
    //     userName: () => cy.get('[placeholder="Username"]'),
    //     password: () => cy.get('[placeholder="Password"]'),
    //     loginBtn: () => cy.get('button')
    // }

    static login(userName: string, password: string) {
        cy.getByPlaceHolder(elements.userName).type(userName);
        cy.getByPlaceHolder(elements.password).type(password)
        cy.get(elements.loginBtn).click()
    }


}


