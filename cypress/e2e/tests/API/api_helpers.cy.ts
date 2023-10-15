const baseUrl = Cypress.config().baseUrl


export const URLs = {
    users: `${baseUrl}/api/users`,
}

export default class addUser1addUser {

    static generateRandomUserName(prefix = 'user') {
        // Generate a random username using a combination of a prefix and a random number
        const randomNumber = Math.floor(Math.random() * 1000);
        const username = `${prefix}${randomNumber}`;
        return username;
    }
    static conduitNewUser(email: string, password: string, username: string) {
        cy.request({
            method: 'POST',
            url: URLs.users,
            body:
            {
                user: {
                    email: email,
                    password: password,
                    username: username
                }
            }

        })
    }
}

