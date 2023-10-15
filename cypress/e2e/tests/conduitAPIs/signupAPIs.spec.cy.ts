import { resolve } from 'cypress/types/bluebird'
import addUser from '../deleted/helpers/signupHelper'

describe('Conduit: Signup Account', () => {

    it('Cxxx1: Login - Create new Account', () => {


        cy.request({
            method: 'POST',
            url: 'https://conduit.productionready.io/api/users',
            body:
            {

                user: {
                    username: `ahmad${Math.round(10000 * (Math.random()))}`,
                    email: `ahmad${Math.round(10000 * (Math.random()))}@test.com`,
                    password: "12345"
                }

            }
        })
    })

    it('Cxxx2: Conduit - Create new Account', () => {

        addUser.conduitNewUserUsingAPI(`ahmad${Math.round(10000 * (Math.random()))}`,`ahmad${Math.round(10000 * (Math.random()))}@test.com`, '12345' )
        
    })
    it.only('Cxxx3: Conduit - Create new Account', () => {

        const apipayload ={
            user: {
                email: `ahmad${Math.round(10000 * (Math.random()))}@test.com`,
                username: `ahmad${Math.round(10000 * (Math.random()))}`,
                password: '12345'
            }
        }
        addUser.conduitNewUserUsingAPI2(apipayload).then((response) => {
            expect(response.status).to.equal(201);
            // expect(response.body).to.have.property('username');
            //expect(response.body.username).to.be.a('string');
            // expect(response.body).to.have.property('email');
            // expect(response.body.username).to.be.a('string');





        })
        
    })

})