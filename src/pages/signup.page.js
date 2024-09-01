const { faker } = require('@faker-js/faker');

class SignupPage {
    get signUpLink() { return $('//android.widget.TextView[@text="Sign up"]'); }
    get emailInput() { return $('//android.widget.EditText[@content-desc="input-email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@content-desc="input-password"]'); }
    get repeatPasswordInput() { return $('//android.widget.EditText[@content-desc="input-repeat-password"]'); }
    get signUpButton() { return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]'); }
    get modalTitle() { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]'); }
    get modalOkButton() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
    get loginContainerButton() { return $('//android.view.ViewGroup[@content-desc="button-login-container"]/android.view.ViewGroup'); }

    generateRandomEmail() {
        return faker.internet.email();
    }

    generateRandomPassword(length = 8) {
        return faker.internet.password(length);
    }

    async signUp(email, password) {
        console.log('Navigating to Sign Up');
        await this.signUpLink.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Sign up link not found after 10s' });
        await this.signUpLink.click();

        console.log('Entering Email');
        await this.emailInput.setValue(email);

        console.log('Entering Password');
        await this.passwordInput.setValue(password);

        console.log('Repeating Password');
        await this.repeatPasswordInput.setValue(password);

        console.log('Clicking Sign Up Button');
        await this.signUpButton.click();

        console.log('Waiting for Modal');
        await browser.pause(3000);

        console.log('Checking Modal Text');
        await this.modalTitle.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Sign up modal not displayed after 10s' });
        const modalText = await this.modalTitle.getText();
        if (modalText !== "Signed Up!") {
            throw new Error("Sign-up modal did not display expected text");
        }

        console.log('Closing Modal');
        await this.modalOkButton.waitForDisplayed({ timeout: 10000, timeoutMsg: 'OK button on modal not found after 10s' });
        await this.modalOkButton.click();

        console.log('Tapping Login Container Button');
        await this.tapLoginContainerButton();
    }

    async closeModal() {
        console.log('Closing Modal');
        await this.modalOkButton.waitForDisplayed({ timeout: 10000, timeoutMsg: 'OK button on modal not found after 10s' });
        await this.modalOkButton.click();
    }

    async tapLoginContainerButton() {
        console.log('Tapping Login Container Button');
        await this.loginContainerButton.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Login container button not found after 10s' });
        await this.loginContainerButton.click();
    }

    async quickSignup() {
        const email = this.generateRandomEmail();
        const password = this.generateRandomPassword();
    
        await this.signUp(email, password);
        return { email, password };
    }
}

module.exports = new SignupPage();