var DashboardPage = require("../pages/dashboardpage");
var NewOrderPage = require("../pages/neworderpage");
var EditOrderPage = require("../pages/editorderpage");
var ExecuteOrderPage = require("../pages/executeorderpage");
var ApplicationPage = require("../pages/applicationpage");
var LoginPage = require("../pages/loginpage.js");
var Async = require("async");
var csv = require('ya-csv');
var ModalCloseTime = 500;

var AomPrivateKeywords = {

    "AOM.SignInUser": function(next, username, password) {
        console.log("AOM.Signin: username:" + username + ", password:" + password);
        var login = new LoginPage();
        login.waitForLoad(20).then(function (SignInButtons) {
            expect(SignInButtons.length).toEqual(1);
        });

        for (var i = 0; i <= 5; i++) {
            login.isDisplayed().then(function (SignInButtons) {
                if (SignInButtons.length === 1){
                    login.login(username, password, false, "");
                    var dashboard = new DashboardPage(); // get the dashboard page.
                    dashboard.waitForLoad(20).then(function (BidButtons) {
                        if (BidButtons.length = 0) {
                            i = 6;
                        }
                    });
                }
            });
        }

        next();
    },

    "AOM.ToasterVisible": function(next) {
        console.log("AOM.ToasterVisible : Looking for signed out toaster message");
        var login = new LoginPage();
        var toasterMessagesFound = false;
        login.ToasterMessagesVisible().then(function(ToasterMsgs)
        {
            for (var i = 0; i <= 20; i++) {
                element.all(by.className('toast-message')).then(function (ToasterMessages) {
                    if(!toasterMessagesFound)
                    {
                        console.log("Count Toast Message: " + ToasterMessages.length);
                        if (ToasterMessages.length > 0) {
                            console.log(ToasterMessages.length + " toaster message(s) Found!");
                                ToasterMessages[0].getText().then(function(toasterText)
                                {
                                    console.log(toasterText);
                                });
                            toasterMessagesFound = true;
                            i = 20;
                        } else {
                            browser.sleep(1000);
                        }
                    }
                }); //ToasterMessages
            }
        }); //ToasterMsgs
    },

    "AOM.CheckToastrMessage": function(next, text, closeonexit, retryIterationCount, maxRetryWait) {
        console.log("AOM.ToasterVisible : Looking for toaster message containing: " + text);
        var applicationPage = new ApplicationPage();
        var messageMatched = false;

        var retryCount = 5;
        var retryWaitTime = 5000;

        if(retryIterationCount != "" && retryIterationCount != 0 && typeof retryIterationCount != 'undefined') retryCount = retryIterationCount;
        if(maxRetryWait != "" && maxRetryWait != 0 && typeof maxRetryWait != 'undefined') retryWaitTime = maxRetryWait;

        applicationPage.ToasterMessagesVisible().then(function(ToasterMsgs)
        {
            for (var i = 0; i < retryCount; i++) {
                element.all(by.className('toast-message')).then(function (ToasterMessages) {
                    if(!messageMatched)
                    {
                        console.log("Count Toast Message: " + ToasterMessages.length);
                        if (ToasterMessages.length > 0) {
                            console.log(ToasterMessages.length + " toaster message(s) Found!");
                            for (var j = 0; j < ToasterMessages.length; j++) {
                                ToasterMessages[j].getText().then(function(toasterText)
                                {
                                    console.log(toasterText);
                                    if(toasterText.indexOf(text) > -1)
                                    {
                                        console.log("-- Expected Message [" + text + "] found.");
                                        messageMatched = true;
                                        i = retryCount;
                                        j = ToasterMessages.length;
                                    }

                                    if(messageMatched || i >= retryCount) {
                                        next(messageMatched);
                                    }
                                }); // ToasterMessages[j].getText().then(function(toasterText)
                            };
                        } else {
                            browser.sleep(retryWaitTime / (retryCount - retryCount));
                        }
                    }
                }); //ToasterMessages
            }
        }); //ToasterMsgs
    }
};

module.exports = AomPrivateKeywords;