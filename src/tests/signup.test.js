const HomePage = require('../pages/home.page');
const SignupPage = require('../pages/signup.page');
const sharedData = require('../utils/sharedData');

describe('Signup Tests', () => {
    before(async () => {
        sharedData.clear();
    });

    beforeEach(async () => {
        await HomePage.navigateToSection(HomePage.loginMenuIcon);
    });

    it('should perform signup with different emails', async () => {
        const users = [];
        for (let i = 0; i < 3; i++) {
            const email = SignupPage.generateRandomEmail();
            const password = SignupPage.generateRandomPassword();

            await SignupPage.signUp(email, password);
            console.log(`Signed up with email: ${email}`);
            users.push({ email, password });
        }

        sharedData.save(users);
    });
});