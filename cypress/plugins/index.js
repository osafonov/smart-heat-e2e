// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// promisified fs module
const fs = require('fs-extra'),
      path = require("path");

function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
}

// plugins file
module.exports = (on, config) => {
    // accept a  value or use development by default
    const file = 'cypress.' + (config.env.ENVIRONMENT || 'dev')
    return getConfigurationByFile(file)
}