const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'tempUserData.json');

const sharedData = {
    save(data) {
        fs.writeFileSync(dataFilePath, JSON.stringify(data));
    },
    load() {
        if (fs.existsSync(dataFilePath)) {
            return JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
        }
        return [];
    },
    exists() {
        return fs.existsSync(dataFilePath);
    },
    clear() {
        if (fs.existsSync(dataFilePath)) {
            fs.unlinkSync(dataFilePath);
        }
    }
};

module.exports = sharedData;