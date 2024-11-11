const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, // Enable video recording
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    specPattern: 'eve_test.cy.js'
  },
});
