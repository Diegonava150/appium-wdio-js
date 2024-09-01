const SwipePage = require('../pages/swipe.page');
const HomePage = require('../pages/home.page');
const assert = require('assert');

describe('Swipe Section Tests', () => {
    before(async () => {
        // Perform any setup that requires the browser object here
    });

    beforeEach(async () => {
        await HomePage.navigateToSection(HomePage.swipeMenuIcon);
        await SwipePage.swipeSection.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Swipe section not found after 10s' });
    });

    it('should vertically swipe until hidden text is found and then swipe right through the cards', async () => {
        await SwipePage.verticalSwipeTillHiddenText();
        assert(await SwipePage.isHiddenTextVisible(), 'Hidden text "You found me!!!" should be visible.');

        await SwipePage.swipeRightToLastCard();
        assert(await SwipePage.isLastCardVisible(), 'Last card should be visible after swiping.');
    });
});