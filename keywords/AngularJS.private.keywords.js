var AngularJSHomePage = require("../pages/AngularJSHomePage");

var AngularJSPrivateKeywords = {

    "AngularJSPrivate.SetYourName": function(next, name) {
        var angularJSHomePage = new AngularJSHomePage();
        angularJSHomePage.setYourName(name);
        next();
    },

    "AngularJSPrivate.GetYourName": function(next) {
        var angularJSHomePage = new AngularJSHomePage();
        angularJSHomePage.getYourName().then(function (NameOut) {
            next(NameOut);
        });
    },

    "AngularJSPrivate.CheckYourName": function(next, nameIn, nameOut) {
        console.log("AngularJS.CheckYourName: " + nameOut + " contains " + nameIn);
        var angularJSHomePage = new AngularJSHomePage();
        expect(nameOut).toContain(nameIn);
        next();
    }
};

module.exports = AngularJSPrivateKeywords;