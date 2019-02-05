//Steps definition for signup feature
var chai = require('chai'),
    expect = chai.expect,
    chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

var {defineSupportCode} = require('cucumber');
var kabooSignupURL= 'qatest.staging.kaboo.com/en/signup';
var username ="kaboo";
var password = "flappybird";
var KabooLoginPageObject = require('../../PageObject/kabooLoginPageObject.js');
var KabootSignupPageObject = require('../../PageObject/kabooSignupPageObject.js');
var commonUtils = require('../../Utils/commonUtils.js');
kabooLoginPage = new KabooLoginPageObject();
kabooSignupPage = new KabootSignupPageObject();
commonUtils = new commonUtils();
//Aux vars to be used
var signupElement = element(by.css('[class="m-auth-registration__form-wrapper"]'));
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(15 * 1000);

 var emailSignup = 'juanjoreina@hotmail.com';
 var usernameSignup = 'juanjoreina'
 var passwordSignup = '123456Qa';
 var firstnameSignup = 'Juanjo';
 var surnameSignup = 'Reina';
 var dateOfBirthSignup = '12/10/1980';
 var addressSignup = 'Retiro';
 var postCodeSignup = '28001';
 var citySignup = 'Madrid';
 var phoneNumberSignup = '666999444';

defineSupportCode(({Given, When, Then}) => {
  Given('user is on /signup page', function(callback) {
    var finalSignupURL = username + ':' + password + "@" + kabooSignupURL;
           commonUtils.navigateToURL(finalSignupURL)
           .then(callback);
  });

  When('fills all fields with valid data on step 1', function (callback){
    kabooSignupPage.setAllTheFieldsInTheFirstStep(emailSignup, usernameSignup, passwordSignup, callback);
  });

  When('clicks NEXT', function (callback){
    kabooSignupPage.nextPage(callback);
  });

  When('fills all fields with valid data from step 2', function (callback){
    kabooSignupPage.setAllTheFieldsInTheSecondStep(firstnameSignup, surnameSignup, dateOfBirthSignup, addressSignup, postCodeSignup, citySignup, phoneNumberSignup, callback);
  });

  Then('register button is enable and clickable', function(callback){
    kabooSignupPage.checkRegisterButtonIsEnableAndClicklable(callback);
  });

});
