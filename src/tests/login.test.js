const HomePage = require('../pages/home.page');
const LoginPage = require('../pages/login.page');
const SignupPage = require('../pages/signup.page');
const sharedData = require('../utils/sharedData');

describe('Login Tests', () => {
    beforeEach(async () => {
        await HomePage.navigateToSection(HomePage.loginMenuIcon);
    });

    it('should log in with signed up emails and tap additional element', async () => {
        let users = sharedData.load();

        if (users.length === 0) {
            console.log('No users found. Creating a quick signup user.');
            const user = await SignupPage.quickSignup();
            users.push(user);
            sharedData.save(users);
        }

        for (const user of users) {
            const { email, password } = user;
            await LoginPage.login(email, password);
            const loginSuccess = await LoginPage.isLoginSuccess();
            if (!loginSuccess) {
                throw new Error(`Login failed for email: ${email}`);
            }
            await LoginPage.closeModal();
        }
    });

    after(async () => {
        sharedData.clear();
    });
});