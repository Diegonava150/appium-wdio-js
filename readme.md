# WebdriverIO Mobile Automation Framework with Appium and JS

This repository contains an end-to-end mobile automation framework built using WebdriverIO. The tests are designed to verify the navigation and functional aspects of a mobile application.

## Table of Contents

- [WebdriverIO Mobile Automation Framework](#webdriverio-mobile-automation-framework)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Prerequisites

Before you can start running tests, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) (JDK 8 or higher)
- [Android Studio](https://developer.android.com/studio)
- [WebdriverIO](https://webdriver.io/)
- Android emulator or a physical device for testing

Ensure that Android Studio and the Android SDK are set up properly. You may need to configure environment variables like `ANDROID_HOME`.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Diegonava150/appium-wdio-js.git
    cd webdriverio-mobile-automation
    ```

2. Install project dependencies:
    ```bash
    npm install
    ```

3. Set up WebdriverIO configuration:
    ```bash
    npx wdio config
    ```
    Follow the prompts to configure your WebdriverIO setup. Ensure that you select the required setup for Appium testing.

