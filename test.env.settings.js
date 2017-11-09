const path = require('path');
/*
  * Some capabilities must be set to make sure appium can connect to your device.
  * browserName: leave this empty, we want protractor to use the embedded webview
  * autoWebView: true for hybrid applications
  * platformName: device platform name (eg. 'android')
  * platformVersion: version of the android on the device (eg. '7.0')
  * deviceName: for android, it can be the adb device address (eg. 'ce031713733918ed0c')
  * app: the location of the apk (must be absolute)
  */
module.exports = {
  android: {
    filter: "**/*.e2e.js",
    selenium_start_process: false,
    selenium_port: 4723,
    selenium_host: '127.0.0.1',
    silent: true,
    desiredCapabilities: {
      browserName: '',
      autoWebview: true,
      automationName: 'selendroid',
      platformName: 'android',
      deviceName: 'emulator-5554',
      app: path.resolve(__dirname, 'platforms/android/build/outputs/apk/android-debug.apk')
    }
  },
  ios: {
    filter: "**/*.e2e.js",
    selenium_start_process: false,
    selenium_port: 4723,
    selenium_host: '127.0.0.1',
    silent: true,
    desiredCapabilities: {
      browserName: '',
      autoWebview: true,
      platformName: 'ios',
      platformVersion: '11.1',
      deviceName: 'iPhone Simulator',
      app: path.resolve(__dirname, 'platforms/ios/build/emulator/Ionic\ seed.app')
    }
  },
};
