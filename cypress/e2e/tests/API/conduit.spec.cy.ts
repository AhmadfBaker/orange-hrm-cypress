import addUser from '../API/api_helpers.cy'
import addUser1 from './users_api_helpers.cy'
import generateRandomUserName from '../API/api_helpers.cy'

const newUser: addUser = new addUser() 
const randomUsername = new generateRandomUserName();
const newUser1: addUser1 = new addUser1() 

describe('Conduit SignUp Account', () => {


    it('Conduit - Create new Account', () => {
        const newUser: addUser = new addUser() 
        const randomUsername = new generateRandomUserName();    
        //let username = addUser.generateRandomUserName
        addUser.conduitNewUser(`email_${Math.round(10000 * (Math.random()))}@gmail.com`, '123',`ahmad${Math.round(10000 * (Math.random()))}`)

    })
    it.only('Conduit - Create new Account', () => {  
        //let username = addUser.generateRandomUserName
        const apiPayload = {
            // Your payload data
            user:{
            email: `email_${Math.round(10000 * (Math.random()))}@gmail.com`,
            password: '123',
            username: `ahmad${Math.round(10000 * (Math.random()))}`
            }
        };
          addUser1.conduitNewUserUsingAPI(apiPayload).then((response) => {
            expect(response.status).to.equal(201);
          });
    })

})