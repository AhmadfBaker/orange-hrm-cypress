import GenaricHelper from "e2e/tests/deleted/helpers/genaricFunction";
import { ICreateEmployeePayload } from "e2e/tests/deleted/payload/employeeAPIPayload";

export default class EmployeeInit {
    static initEmployee(): ICreateEmployeePayload {

        let createEmployeePayload: ICreateEmployeePayload = {
            user: {
                email: `email_${GenaricHelper.generateRandomString()}@gmail.com`,
                password: '123',
                username: `ahmad${GenaricHelper.generateRandomString()}`
            }

        }
        return createEmployeePayload
    }
}
