import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';
import Navigate from '../pageobjects/navigate.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';


describe('Hamburger Menu', () => {
    it('Hamburger menu functions work on all pages', async () => {
        await Login.login('standard_user', 'secret_sauce')
        await HamburgerMenu.hamburgerMenuMainPage()
        await Navigate.navToCart()
        await HamburgerMenu.hamburgerMenu()
        await Navigate.navToCheckout()
        await HamburgerMenu.hamburgerMenu()
        await Navigate.navToContinue()
        await HamburgerMenu.hamburgerMenu()
        await Navigate.navToFinish()
        await HamburgerMenu.hamburgerMenu()
    })
})

