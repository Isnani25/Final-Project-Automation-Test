const homePage = require('../support/pages/home-page/homePage')

describe("Checkout", () => {
    beforeEach(() => {
        // pre step
        
        
    })

    it("Checkout with registered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickLoginMenu()
        homePage.verifyLoginModalAppears()
        homePage.Login('Isnani25', 'Isnani2512')
        homePage.verifySignUpSuccessMessageAppears()
    })


})
