class WebviewPage {
    get toggleNavBarButton() { return $('//android.widget.Button[@text="Toggle navigation bar"]'); }
    get darkLightModeText() { return $('android=new UiSelector().text("Switch between dark and light mode (currently dark mode)")'); }
    get closeNavBarButton() { return $('//android.widget.Button[@text="Close navigation bar"]'); }
    get docsLink() { return $('//android.view.View[@content-desc="Docs"]'); }
    get apiLink() { return $('//android.view.View[@content-desc="API"]'); }
    get blogLink() { return $('//android.view.View[@content-desc="Blog"]'); }
    get contributeLink() { return $('//android.view.View[@content-desc="Contribute"]'); }
    get communityLink() { return $('//android.view.View[@content-desc="Community"]'); }
    get sponsorLink() { return $('//android.view.View[@content-desc="Sponsor"]'); }
    get versionLink() { return $('//android.view.View[@content-desc="v9"]'); }
    get languagesButton() { return $('//android.widget.Button[@text="Languages"]'); }
    get githubRepoLink() { return $('//android.view.View[@content-desc="GitHub repository"]'); }
    get twitterLink() { return $('//android.view.View[@content-desc="@webdriverio on Twitter"]'); }
    get youtubeLink() { return $('//android.view.View[@content-desc="@webdriverio on YouTube"]'); }
    get discordChatLink() { return $('//android.view.View[@content-desc="Support Chat on Discord"]'); }
    get polishLanguageOption() { return $('//android.view.View[@text="Main"]/android.view.View[3]/android.widget.ListView/android.view.View[8]/android.widget.ListView/android.view.View[10]'); }

    async waitForWebViewLoad(timeout = 20000) {
        await browser.pause(timeout);
    }

    async toggleNavigationBar() {
        await this.toggleNavBarButton.waitForDisplayed({ timeout: 5000 });
        await this.toggleNavBarButton.click();
    }

    async checkItemsDisplayedAndClickable() {
        const elements = [
            this.darkLightModeText,
            this.closeNavBarButton,
            this.docsLink,
            this.apiLink,
            this.blogLink,
            this.contributeLink,
            this.communityLink,
            this.sponsorLink,
            this.versionLink,
            this.languagesButton,
            this.githubRepoLink,
            this.twitterLink,
            this.youtubeLink,
            this.discordChatLink
        ];

        for (let element of elements) {
            await element.waitForDisplayed({ timeout: 5000 });
            await browser.pause(6000);
            assert(await element.isDisplayed(), `${element.selector} is not displayed`);
            assert(await element.isClickable(), `${element.selector} is not clickable`);
        }
    }

    async openLanguagesAndCheckPolish() {
        await this.languagesButton.click();
        await browser.pause(6000);
        const polishLanguage = this.polishLanguageOption;
        await polishLanguage.waitForDisplayed({ timeout: 5000 });
        assert(await polishLanguage.isDisplayed(), "Polish language option is not displayed");
    }

    async closeNavigationBar() {
        await this.closeNavBarButton.click();
    }
}

module.exports = new WebviewPage();