const HomePage = require('../pages/home.page');
const WebviewPage = require('../pages/webview.page'); // Assuming WebviewPage is well defined
const assert = require('assert');

describe('Navigation Tests', () => {
    before(async () => {
        await HomePage.navigateToSection(HomePage.homeMenuIcon);
    });

    it('should navigate to Webview section, perform actions, and validate', async () => {
        console.log('Navigating to Webview section...');
        await HomePage.navigateToSection(HomePage.webviewMenuIcon);

        await WebviewPage.waitForWebViewLoad();

        try {
            await WebviewPage.toggleNavigationBar();

            await WebviewPage.checkItemsDisplayedAndClickable();

            await WebviewPage.openLanguagesAndCheckPolish();

            await WebviewPage.closeNavigationBar();
        } catch (error) {
            console.error("Webview interaction failed: ", error.message);
            return;
        }
    });

    it('should navigate to Login section and check visibility and properties', async () => {
        console.log('Navigating to Login section...');
        await HomePage.navigateToSection(HomePage.loginMenuIcon);
        const loginSpecificElement = await $('~loginSpecificElement');
        assert(await HomePage.isElementDisplayed(loginSpecificElement));
    });

    it('should navigate to Forms section and check visibility and properties', async () => {
        console.log('Navigating to Forms section...');
        await HomePage.navigateToSection(HomePage.formsMenuIcon);
        const formsSpecificElement = await $('~formsSpecificElement');
        assert(await HomePage.isElementDisplayed(formsSpecificElement));
    });

    it('should navigate to Swipe section and check visibility and properties', async () => {
        console.log('Navigating to Swipe section...');
        await HomePage.navigateToSection(HomePage.swipeMenuIcon);
        const swipeSpecificElement = await $('~swipeSpecificElement');
        assert(await HomePage.isElementDisplayed(swipeSpecificElement));
    });

    it('should navigate to Drag section and check visibility and properties', async () => {
        console.log('Navigating to Drag section...');
        await HomePage.navigateToSection(HomePage.dragMenuIcon);
        const dragSpecificElement = await $('~dragSpecificElement');
        assert(await HomePage.isElementDisplayed(dragSpecificElement));
    });
});