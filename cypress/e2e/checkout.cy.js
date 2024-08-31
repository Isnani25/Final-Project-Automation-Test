const homePage = require('../support/pages/home-page/homePage');
const checkoutPage = require('../support/pages/Checkout/checkoutPage');
const data = require('../support/pages/staticdata');
const rand = require('../support/pages/randomize');
const loginPage = require('../support/pages/Login/loginPage');

describe("checkout", () => {
    var customer_name = rand.name()
    var customer_country = data.placeorder.placeorder_country
    var customer_city = data.placeorder.placeorder_city
    var customer_card = rand.card_number()
    var order_month = data.placeorder.placeorder_month
    var order_year = data.placeorder.placeorder_year
    beforeEach(() => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        loginPage.clickLogInMenu()
        loginPage.verifyLogInModalAppears()
        loginPage.logIn(data.user_data.registered_username, data.user_data.registered_password)
        loginPage.verifynameofUser()
        loginPage.verifyLogout()

        checkoutPage.addcartphones()
        checkoutPage.addcartlaptops()
        checkoutPage.addcartmonitors()
        checkoutPage.clickmenuCart()
    })

    it("Chekout with valid data", () => {
        checkoutPage.inputOrder(customer_name, customer_country, customer_city, customer_card, order_month, order_year)
        checkoutPage.verifyalertsuccessPurchase()
        
     })
    it("Chekout with empty data", () => {
        checkoutPage.inputOrder('', '', '', '', '', '')
        checkoutPage.alertemty()
        
    })
})