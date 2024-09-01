const assert = require('assert');

class HomePage {
    get homeMenuIcon() { return $('//android.view.View[@content-desc="Home"]'); }
    get webviewMenuIcon() { return $('//android.view.View[@content-desc="Webview"]'); }
    get loginMenuIcon() { return $('//android.view.View[@content-desc="Login"]'); }
    get formsMenuIcon() { return $('//android.view.View[@content-desc="Forms"]'); }
    get swipeMenuIcon() { return $('//android.view.View[@content-desc="Swipe"]'); }
    get dragMenuIcon() { return $('//android.view.View[@content-desc="Drag"]'); }

    async navigateToSection(menuIcon) {
        await menuIcon.waitForDisplayed({ timeout: 10000 });
        await menuIcon.click();
        await browser.pause(2000); // Adjust this pause as needed for navigation completion
    }

    async isElementDisplayed(element) {
        await element.waitForDisplayed({ timeout: 10000 });
        const isDisplayed = await element.isDisplayed();
        return isDisplayed;
    }
}

module.exports = new HomePage();