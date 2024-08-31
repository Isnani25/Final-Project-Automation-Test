const homePage = require('../support/pages/home-page/homePage')

describe("Login", () => {
    beforeEach(() => {
        // pre step
        
        
    })

    it("should successfully log in with valid Username Password", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.Login('', 'Isnani123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })
    it("should successfully log in with invalid Username Password", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.Login('', 'Isnani1234')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.Login('', 'isnani123')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

})