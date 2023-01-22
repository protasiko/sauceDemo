const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://saucedemo.com',
    chromeWebSecurity: false,

    defaultCommandTimeout: 40000,
    pageLoadTimeout: 40000
  },
});
