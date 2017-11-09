const jar = require('selenium-server-standalone-jar');
const testSettings = require('../test.env.settings');

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
  test_settings: testSettings
};
