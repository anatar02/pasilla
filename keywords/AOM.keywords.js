// AOMKeywords.js
var LoginPage = require("../pages/loginpage.js");
var DashboardPage = require("../pages/dashboardpage.js");
var key = require('keyword');
try { key(require('./Just.private.keywords')); } catch(err) { }
try { key(require('./AOM.private.keywords')); } catch(err) { }

var AOMKeywords = {

    "Signin": function(next, userid, password, rememberme) {
        console.log("userid=" + userid);

        var login = new LoginPage();
        login.waitForLoad(20).then(function (SignInButtons) {
            expect(SignInButtons.length).toEqual(1);
        });

        for (var i = 0; i <= 5; i++) {
            login.isDisplayed().then(function (SignInButtons) {
                if (SignInButtons.length === 1){
                    login.login(userid, password, false, "");
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

    "VerifySigninFailMessage": function(next, userid, password, message) {
        var login = new LoginPage();
        login.waitForLoad(20).then(function (SignInButtons) {
            expect(SignInButtons.length).toEqual(1);
        });

        login.login(userid, password, false, "");
        expect(login.failText()).toEqual(message);
        next();
    },

    "VerifySigninFailedAttemptsAllowed": function(next, userid, incorrectPassword, password, numAllowedFails) {
        var login = new LoginPage();
        var dashboard = new DashboardPage(); // get the dashboard page.

        //Login successfully to reset the count
        login.waitForLoad(20).then(function (SignInButtons) {
            expect(SignInButtons.length).toEqual(1);
        });

        for (var i = 0; i <= 5; i++) {
            login.isDisplayed().then(function (SignInButtons) {
                if (SignInButtons.length === 1){
                    login.login(userid, password, false, "");
                    var dashboard = new DashboardPage(); // get the dashboard page.
                    dashboard.waitForLoad(20).then(function (BidButtons) {
                        if (BidButtons.length = 0) {
                            i = 6;
                        }
                    });
                }
            });
        }

        dashboard.logout();
        login.waitForLoad(10);

        //Repeat failed attempt X times to get to the limit
        for (var j = 1; j <= numAllowedFails; j++) {
            login.login(userid, incorrectPassword, false, "");
            expect(login.failText()).toContain('Invalid login details, please try again');
        }

        //Login successfully to show the count was reset
        login.login(userid, password, false, "");
        dashboard.waitForLoad(30).then(function (BidButtons) {
            expect(BidButtons.length).not.toEqual(0);
        });

        dashboard.logout();
        login.waitForLoad(10);
        next();
    },

    "SuspendAfterFailedSigningAttempts": function(next, userid, incorrectPassword, password, numAllowedFails) {
        var login = new LoginPage();
        var dashboard = new DashboardPage(); // get the dashboard page.

        //Login successfully to reset the count
        login.waitForLoad(20).then(function (SignInButtons) {
            expect(SignInButtons.length).toEqual(1);
        });

        for (var i = 0; i <= 5; i++) {
            login.isDisplayed().then(function (SignInButtons) {
                if (SignInButtons.length === 1){
                    login.login(userid, password, false, "");
                    var dashboard = new DashboardPage(); // get the dashboard page.
                    dashboard.waitForLoad(20).then(function (BidButtons) {
                        if (BidButtons.length = 0) {
                            i = 6;
                        }
                    });
                }
            });
        }

        dashboard.logout();
        login.waitForLoad(10);

        //Repeat X times to get to the limit
        for (var j = 1; j < numAllowedFails; j++) {
            login.login(userid, incorrectPassword,  false, "");
            expect(login.failText()).toContain('Invalid login details, please try again');
        }

        //This time it will block
        login.login(userid, incorrectPassword,  false, "");
        expect(login.failText()).toContain('This account is currently inaccessible.');

        next();
    },

    "Signout": function(next) {
        var dashboard = new DashboardPage(); // get the dashboard page.
        var login = new LoginPage();

        dashboard.logout();
        login.waitForLoad(10);
        next();
    },

    "NewOrder": function(next, product, bidask, quantity, price, notes ) {
        console.log("product=" + product + ", bidask=" + bidask + ', quantity=' + quantity);
        next();
    },

    "OrderInBidAskStack": function(next, product, bidask, quantity, price, notes ) {
        console.log("product=" + product + ", bidask=" + bidask + ', quantity=' + quantity);
        next();
    },

    "OrderInMarketTicker": function(next, product, bidask, quantity, price, notes ) {
        console.log("product=" + product + ", bidask=" + bidask + ', quantity=' + quantity);
        next();
    },

    "OrderInDatabase": function(next, product, bidask, quantity, price, notes ) {
        console.log("product=" + product + ", bidask=" + bidask + ', quantity=' + quantity);
        next();
    },

    "AOM.Start": function(next, params) {
        console.log("AOM.Start: browser:" + params.browser + ", url:" + params.url);
        browser.get(params.url);
        next();
    },

    "AOM.CheckMessage":[

        "Just.GetValueFromParams", ["$1", "retryCount"], "=> $retryCount",
        "Just.GetValueFromParams", ["$1", "retryWaitTime"], "=> $retryWaitTime",

        "Just.GetValueFromParams", ["$1", "text"], "=> $text",
        "Just.GetValueFromParams", ["$1", "closeonexit"], "=> $closeonexit",

        "AOM.CheckToastrMessage", ["$text", "$closeonexit", "$retryCount", "$retryWaitTime"], "=> $messageDisplayed",

        "Just.AssertValue", [true, "$messageDisplayed"]
    ],

    "AOM.Signin":[

        "Just.GetValueFromParams", ["$1", "username"], "=> $username",
        "Just.GetValueFromParams", ["$1", "password"], "=> $password",

        "AOM.SignInUser", ["$username", "$password"]
    ],

    "AOM.Delay": function(next, params ) {
        browser.sleep(params.delay);
        next();
    },

    "AOM.Signout": function(next, params ) {
        console.log("AOM.Signout: ");
        var dashboard = new DashboardPage(); // get the dashboard page.
        var login = new LoginPage();

        dashboard.logout();
        login.waitForLoad(10);
        next();
    },


    "AOM.End": function(next, params ) {
        //console.log(this.name);
        next();
    }
};

module.exports = AOMKeywords;