class SwipePage {
    get oldCard() { return $('//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_0_READY__"]'); }
    get lastCard() { return $('//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_5_READY__"]'); }
    get hiddenText() { return $('//android.widget.TextView[@text="You found me!!!"]'); }
    get swipeSection() { return $('//android.view.View[@content-desc="Swipe"]'); }

    async swipeRight() {
        const { width, height } = await driver.getWindowRect();
        const startX = Math.round(width * 0.8);
        const endX = Math.round(width * 0.2);
        const yCoord = Math.round(height * 0.5);

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: yCoord },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 500 },
                { type: 'pointerMove', duration: 1000, origin: 'pointer', x: endX - startX, y: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.releaseActions();
    }

    async swipeRightOnCardsTillEnd() {
        while (await this.oldCard.isDisplayed()) {
            await this.swipeRight();
        }
    }

    async swipeRightToLastCard() {
        while (!await this.lastCard.isDisplayed()) {
            await this.swipeRight();
        }
    }

    async verticalSwipeTillHiddenText() {
        const { height, width } = await driver.getWindowRect();
        const startX = Math.round(width * 0.5);
        const startY = Math.round(height * 0.8);
        const endY = Math.round(height * 0.2);

        while (!await this.hiddenText.isDisplayed()) {
            await driver.performActions([{
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 500 },
                    { type: 'pointerMove', duration: 1000, origin: 'pointer', x: startX, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }]);

            await driver.releaseActions();
        }
    }

    async isOldCardHidden() {
        return !(await this.oldCard.isDisplayed({ reverse: true }));
    }

    async isLastCardVisible() {
        return await this.lastCard.isDisplayed();
    }

    async isHiddenTextVisible() {
        return await this.hiddenText.isDisplayed();
    }
}

module.exports = new SwipePage();