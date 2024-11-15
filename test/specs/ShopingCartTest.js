import Login from '../pageobjects/login.js';
import HamburgerMenu from '../pageobjects/hamburgerMenu.js';
import Navigate from '../pageobjects/navigate.js';
import CheckoutPage from '../pageobjects/checkoutPage.js';


describe('Shopping Cart', () => {
    it('Shopping cart function was fully tested', async () => {
        await Login.login('standard_user', 'secret_sauce')
    })
})