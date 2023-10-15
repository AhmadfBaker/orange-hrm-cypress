import addUser from '../../../support/helpers/signupHelper'

describe('Signup Logic', {tags: '@smoke'}, () => {

    it('Singup: User should be able to create new user', () => {
        addUser.addNewUserViaAPI().then((resolve) => {
            cy.log(`${resolve}`)
        })
    })

})