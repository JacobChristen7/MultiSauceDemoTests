import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import DefaultPage from './defaultPage.js';
import CheckoutPage from './pageobjects/checkoutPage.js';


class Navigate extends DefaultPage {
    get CartNav () {
        return $('.shopping_cart_link')
    }

    get CartCheck () {
        return $('span[data-test="title"]')
    }

    get CheckoutNav () {
        return $('#checkout')
    }

    get CheckoutCheck () {
        return $('span[data-test="title"]')
    }

    get ContinueNav () {
        return $('#continue')
    }

    get ContinueCheck () {
        return $('span[data-test="title"]')
    }

    get FinishNav () {
        return $('#finish')
    }

    get FinishCheck () {
        return $('span[data-test="title"]')
    }


    async navToCart () {
        await this.CartNav.click();
        await expect(this.CartCheck).toBeExisting()
        await expect(this.CartCheck).toHaveText(
            expect.stringContaining('Your Cart'))
    }

    async navToCheckout () {
        await this.navToCart();
        await this.CheckoutNav.click();
        await expect(this.CheckoutCheck).toBeExisting()
        await expect(this.CheckoutCheck).toHaveText(
            expect.stringContaining('Checkout: Your Information'))
    }

    async navToContinue () {
        await this.navToCheckout();
        await 
        await this.ContinueNav.click();
        await expect(this.ContinueCheck).toBeExisting()
        await expect(this.ContinueCheck).toHaveText(
            expect.stringContaining('Checkout: Overview'))
    }

    async navToFinish () {
        await this.navToContinue();
        await this.FinishNav.click();
        await expect(this.FinishCheckCheck).toBeExisting()
        await expect(this.FinishCheckCheck).toHaveText(
            expect.stringContaining('Checkout: Overview'))
    }
}

export default new Navigate();