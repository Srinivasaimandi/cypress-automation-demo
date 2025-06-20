import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
    // specPattern: "./e2e/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
