const homePage = require('../support/pages/home-page/homePage')

describe("Signup", () => {
    beforeEach(() => {
        // pre step
        
        
    })

    it("Signup with unregistered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', 'Isnani1234')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("SignUp with Blank Username Password", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', 'Isnani123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("SignUp with registered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('random', 'Isnani123')
        homePage.verifySignUpSuccessMessageAppears()
    })
})
