const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8088",
    setupNodeEvents(on, config) {
      let httpServer
      on('file:preprocessor', cucumber())
      on('before:spec', (spec) => {
        httpServer = require('./server').startServer(9088)
      })
      on('after:spec', (spec) => {
        httpServer.close()
      })
    },
    specPattern: "**/*.{feature,features}"
  },
  video: false,
  screenshotOnRunFailure: false,
  experimentalInteractiveRunEvents: true
});
