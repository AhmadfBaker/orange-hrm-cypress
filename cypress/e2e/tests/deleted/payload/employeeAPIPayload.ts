/**
 * 
 */
export interface ICreateEmployeePayload {
    user: {
        email: string,
        password: string,
        username: string
    }
}

export interface IGetSiliconChipResponse {
    result: any,
}