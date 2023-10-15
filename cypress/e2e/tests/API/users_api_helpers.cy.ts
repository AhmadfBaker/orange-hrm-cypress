const baseUrl = Cypress.config().baseUrl


export const URLs = {
    users: `${baseUrl}/api/users`,
}

export default class addUser1 {

    static generateRandomUserName(prefix = 'user') {
        // Generate a random username using a combination of a prefix and a random number
        const randomNumber = Math.floor(Math.random() * 1000);
        const username = `${prefix}${randomNumber}`;
        return username;
    }
    static conduitNewUserUsingAPI(payload) {
        return cy.request({
            method: 'POST',
            url: URLs.users,
            body:payload,
            // headers: {
            //     'Content-Type': 'application/json',
            // }
        })
    }
}
