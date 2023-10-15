export default class GenaricHelper {

    static generateRandomString(maxNumber = 10000): number{
       return Math.round(maxNumber * (Math.random()))
    }

}