const MAX_WAIT = 1000;

module.exports = {
  'Home -> Homepage renders correctly': browser => browser
    .url('/')
    .waitForElementVisible('body', MAX_WAIT)
    .assert.title('Ionic')

    .waitForElementVisible('#pkgname', MAX_WAIT)
    .assert.containsText('#pkgname', 'io.ionic.seed')
};
