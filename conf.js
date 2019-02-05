//File which have all the config in order to run the test
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  //Brower to execute the tests
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to this directory.
  specs: [
    './Features/automatedScenarios.feature'
  ],

  baseURL: 'http://localhost:8080/',
  ignoreUncaughtExceptions: true,

  onPrepare : function(){
    browser.manage().window().maximize();
  },

  cucumberOpts: {
    require: './Features/stepsDefinition/*.js',
   format: 'json:results.json',
    tags: false,
    profile: false,
    'no-source': true
  }
};
