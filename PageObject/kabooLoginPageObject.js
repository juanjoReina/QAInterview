//This file contains the methods to interactuate with login page
'use strict';

var KabooLoginPageObject = function () {

    //Elements to be used inside login page
    var username = element(by.css('[name="username"]'));
    var password = element(by.css('[name="password"]'));
    var loginButton = element(by.xpath('//*[@id="submitLogin"]'));
    //Aux var
    var httpPrefix= "http://"

    this.setUsername = function (user, callback) {
        browser.wait(protractor.ExpectedConditions.presenceOf(username), 15000,  'Element:' + password + 'is not displayed')
        .then(function(){
            username.sendKeys(user);
        }).then(callback);
    };

    this.setPassword = function (pass, callback) {
        browser.wait(protractor.ExpectedConditions.presenceOf(password), 15000, 'Element:' + username + 'is not displayed')
        .then(function(){
            password.sendKeys(pass);
        }).then(callback);
    };

    this.login = function (callback) {
        browser.wait(protractor.ExpectedConditions.presenceOf(loginButton), 15000, 'Element:' + loginButton + 'is not displayed').
        then(function(){
            loginButton.click();
        }).then(function(){
            browser.wait(protractor.ExpectedConditions.not(protractor.ExpectedConditions.presenceOf(loginButton)));
        }).then(callback);
    };

};

module.exports = KabooLoginPageObject;