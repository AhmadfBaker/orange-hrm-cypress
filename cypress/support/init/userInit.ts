import { ICreateEmployeePayload } from '../API/payload/userAPIPayload'
import GenericHelper from '../helpers/geraricFunctions'
export default class userInit {

    static initUser(): ICreateEmployeePayload {
        let createUserPayload: ICreateEmployeePayload = {
            user: {
                email: `email_${GenericHelper.genericRandomString()}@gmail.com`,
                password: '123',
                username: `ahmad${GenericHelper.genericRandomString()}`
            }
        }
        return createUserPayload;
    }
}

