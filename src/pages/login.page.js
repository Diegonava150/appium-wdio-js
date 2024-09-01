class LoginPage {
    get emailInput() { return $('//android.widget.EditText[@content-desc="input-email"]'); }
    get passwordInput() { return $('//android.widget.EditText[@content-desc="input-password"]'); }
    get loginButton() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'); }
    get modalTitle() { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]'); }
    get modalOkButton() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
    get loginContainerButton() { return $('(//android.widget.TextView[@text="Login"])[1]'); }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async isLoginSuccess() {
        await this.modalTitle.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Login success modal not displayed after 10s' });
        const modalText = await this.modalTitle.getText();
        return modalText === "Success";
    }

    async closeModal() {
        await this.modalOkButton.click();
    }

    async tapLoginContainerButton() {
        await this.loginContainerButton.click();
    }
}

module.exports = new LoginPage();