const MAX_WAIT = 5000;

module.exports = {
  'Home -> Homepage renders correctly': browser =>
    browser
      .waitForElementVisible('body', MAX_WAIT)
      .waitForElementVisible('#pkgname', MAX_WAIT)
      .assert.containsText('#pkgname', 'io.ionic.seed')
};
