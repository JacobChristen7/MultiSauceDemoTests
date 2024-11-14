import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';
import Navigate from '../pageobjects/navigate.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';


describe('Login page', () => {
    it('user was logged in', async () => {
        await Login.login('standard_user', 'secret_sauce')
        await HamburgerMenu.hamburgerMenuMainPage()
        await Login.login('standard_user', 'secret_sauce')
        await Navigate.navToCart()
        await HamburgerMenu.hamburgerMenu()
        await Login.login('standard_user', 'secret_sauce')
        await Navigate.navToCheckout()
        await HamburgerMenu.hamburgerMenu()
        await Login.login('standard_user', 'secret_sauce')
        await Navigate.navToContinue()
        await HamburgerMenu.hamburgerMenu()
        await Login.login('standard_user', 'secret_sauce')
        await Navigate.navToFinish()
        await HamburgerMenu.hamburgerMenu()
    })
})

