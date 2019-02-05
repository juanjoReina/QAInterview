//This file contains the methods to interactuate with signup page
'use strict';

var KabooSignupPageObject = function () {

    var commonUtils = require('../Utils/commonUtils.js');
    commonUtils = new commonUtils();

    //Elements to be used inside signup page
    var email = element(by.xpath('//fieldset[@class="m-auth-registration__fieldset"]//input[@name="email"]'));
    var username = element(by.xpath('//fieldset[@class="m-auth-registration__fieldset"]//input[@name="username"]'));
    var password = element(by.xpath('//fieldset[@class="m-auth-registration__fieldset"]//input[@name="password"]'));
    var passwordRepeat = element(by.xpath('//fieldset[@class="m-auth-registration__fieldset"]//input[@name="passwordRepeat"]'));
    var conditionsAgree = element(by.xpath('//fieldset[@class="m-auth-registration__fieldset"]//ko-gdpr/div/div[7]'));
    var personalDataAgree = element(by.xpath('//fieldset[@class="m-auth-registration__fieldset"]//ko-gdpr/div/div[13]/label/span/span'));
    var nextPageButton = element(by.xpath('//div[@class ="m-auth-registration__button"]//button'));
    var firstname = element(by.xpath('//input[@name="firstname"]'));
    var surname = element(by.xpath('//input[@name="lastname"]'));
    var dayOfBirth = element(by.xpath('//*[@id="days"]'));
    var monthOfBirth = element(by.xpath('//*[@id="months"]'));
    var yearOfBirth = element(by.xpath('//*[@id="years"]'));
    var address = element(by.xpath('//input[@name="address"]'));
    var postalCode = element(by.xpath('//input[@name="postalCode"]'));
    var city = element(by.xpath('//input[@name="city"]'));
    var telephoneNumber = element(by.xpath('//input[@name="phoneNumber"]'));
    var currencyCombo = element(by.xpath('//div[@class="c-field c-field--registration-prefix"]'));
    var currencyComboXpath = '//div[@class="c-field c-field--registration-prefix"]';
    var optionToBeSelected = 1 ;
    var registerButton = element(by.xpath('//div[@class="m-auth-registration__button m-auth-registration__button--form2"]//button'))

    this.setAllTheFieldsInTheFirstStep = function(emailSignup, usernameSignup, passwordSignup, callback){
        browser.wait(protractor.ExpectedConditions.presenceOf(email), 15000, 'Element taking too long to appear in the DOM')
            .then(function (){
                email.sendKeys(emailSignup);
                username.sendKeys(usernameSignup);
                password.sendKeys(passwordSignup);
                passwordRepeat.sendKeys(passwordSignup);
                conditionsAgree.click();
        }).then(function(){
                browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(personalDataAgree), 5000);
        }).then(function(){
                personalDataAgree.click();
        }).then(callback);
    };

    this.nextPage = function (callback) {
        browser.wait(protractor.ExpectedConditions.presenceOf(nextPageButton), 15000, 'Element:' + nextPageButton + 'is not displayed')
         .then(function(){
            nextPageButton.click();
          }).then(function(){
            browser.wait(protractor.ExpectedConditions.not(protractor.ExpectedConditions.elementToBeClickable(personalDataAgree), 5000));
          }).then(callback);
    };

    this.setAllTheFieldsInTheSecondStep = function(firstnameSignup, surnameSignup, dateOfBirthSignup, addressSignup, postCodeSignup, citySignup, phoneNumberSignup, callback){
        browser.wait(protractor.ExpectedConditions.presenceOf(firstname), 15000, 'Element: '+ firstname +' taking too long to appear in the DOM')
            .then(function (){
                    firstname.sendKeys(firstnameSignup);
                    surname.sendKeys(surnameSignup);
                    var splittedDateOfBirth = dateOfBirthSignup.split('/');
                    dayOfBirth.sendKeys(splittedDateOfBirth[0]);
                    monthOfBirth.sendKeys(splittedDateOfBirth[1]);
                    yearOfBirth.sendKeys(splittedDateOfBirth[2]);
                    address.sendKeys(addressSignup);
                    postalCode.sendKeys(postCodeSignup);
                    city.sendKeys(citySignup);
                    telephoneNumber.sendKeys(phoneNumberSignup);
                    currencyCombo.click();
            }).then(function(){
                    commonUtils.selectOptionForCombo(currencyComboXpath, optionToBeSelected);
            }).then(callback);
    };
    this.checkRegisterButtonIsEnableAndClicklable = function(callback){
        browser.wait(protractor.ExpectedConditions.presenceOf(registerButton), 15000, 'Register button is not visible!')
            .then(function(){
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(registerButton), 5000, 'Register button is not clickable!')
            }).then(callback);

    };
};

module.exports = KabooSignupPageObject;