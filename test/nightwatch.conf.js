const jar = require('selenium-server-standalone-jar');
const appiumCapabilities = require('../appium.capabilities');

module.exports = {
  src_folders: ["src"],
  "output_folder" : "reports",
  test_workers: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: jar.path
  },
  parallel_process_delay: 10,
  test_settings: {
    android: {
      filter: "**/*.e2e.js",
      selenium_start_process: false,
      selenium_port: 4723,
      selenium_host: '127.0.0.1',
      silent: true,
      desiredCapabilities: appiumCapabilities
    }
  }
};
