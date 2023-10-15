export interface ICreateEmployeeResponse {

    user: {
        email: string,
        password: string,
        username: string
        bio: string,
        image: any,
        token: string
    }

}