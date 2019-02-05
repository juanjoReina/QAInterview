//File where I have put common utils that can be use anywhere like navigate to URL and select an option from a combo
'use strict';

var commonUtils = function () {

    var httpPrefix= "http://";
    var listOfOptions = "//ul/li";

    this.navigateToURL = function (url) {
      return  browser.get(httpPrefix + url);
    };
    //Method that with the xpath of the combo and the number of the option to be selected clicks on the option
    this.selectOptionForCombo = function (comboXpath, optionToBeSelected) {
    var comboListOfOptions = comboXpath + listOfOptions
        var options = element.all(by.xpath(comboListOfOptions))
            .then(function(options){
                options[optionToBeSelected].click();
             });
    };


};

module.exports = commonUtils;