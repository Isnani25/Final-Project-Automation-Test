const homePage = require('../support/pages/home-page/homePage')

describe("Login", () => {
    beforeEach(() => {
        // pre step
        
        
    })

    it("should successfully log in with valid credentials", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signIn('', 'Isnani123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', 'jojo123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with registered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('random', 'jojo123')
        homePage.verifySignUpSuccessMessageAppears()
    })
})