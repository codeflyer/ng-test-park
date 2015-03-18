exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Options to be passed to Mocha.
  //
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    reporter: 'list'
  }
};
