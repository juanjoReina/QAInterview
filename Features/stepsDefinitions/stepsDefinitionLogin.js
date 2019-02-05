//Steps definition for login feature
var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

var {defineSupportCode} = require('cucumber');
var kabooLoginURL= 'qatest.staging.kaboo.com/en/login';
var username ="kaboo";
var password = "flappybird";
var KabooLoginPageObject = require('../../PageObject/kabooLoginPageObject.js');
var commonUtils = require('../../Utils/commonUtils.js');
kabooLoginPage = new KabooLoginPageObject();
commonUtils = new commonUtils();

 var {setDefaultTimeout} = require('cucumber');
 setDefaultTimeout(15 * 1000);
//Aux vars to be used
 var userLogin='autouk'
 var passwordLogin='Autotest1'

defineSupportCode(({Given, When, Then}) => {
  Given('user is on /login page', function(callback) {
        var finalSignupURL = username + ':' + password + "@" + kabooLoginURL;
        commonUtils.navigateToURL(finalSignupURL)
        .then(callback);
  });

  When('fills username', function (callback){
        kabooLoginPage.setUsername(userLogin, callback);
    });

  When('fills password', function (callback){
        kabooLoginPage.setPassword(passwordLogin, callback);
    });
  When('clicks Log in button', function(callback) {
        kabooLoginPage.login(callback);
    });

  Then('user should be redirected to account page {string}', function(section, callback){
        browser.getCurrentUrl().then( function(url) {
            console.log('This is the current' + url);
            expect(url).to.have.string(section, 'The user was not redirected to the right section!');
       }).then(callback);
   })
});