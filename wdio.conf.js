exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './src/tests/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'adb-RF8N72AF5XY-9XhRZ1._adb-tls-connect._tcp',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'wdio.apk',
        'appium:newCommandTimeout': 240,
        'appium:uiautomator2ServerInstallTimeout': 60000
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
