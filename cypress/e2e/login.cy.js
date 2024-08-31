const homePage = require('../support/pages/home-page/homePage');
const loginPage = require('../support/pages/Login/loginPage');
const data = require('../support/pages/staticdata');


describe("Login", () => {
    beforeEach(() => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        
    })

    it("Login with unregistered data", () => {
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn(data.user_data.noregistered_username, data.user_data.noregistered_password)
        loginPage.verifyUsernotExistsErrorMessageAppears()
    })

    it("Login with blank username password", () => {
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn('', '')
        loginPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("Login with registered data", () => {
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn(data.user_data.registered_username, data.user_data.registered_password)
        loginPage.verifynameofUser()
        loginPage.verifyLogout()
    })
})
