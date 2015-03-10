var key = require('keyword'); // keyword functionality
try { key(require('./AngularJS.private.keywords')); } catch(err) { console.log(err) }
try { key(require('./Just.private.keywords')); } catch(err) { }

var AngularJSKeywords = {
    "AngularJS.SetYourName":[
        "Just.GetValueFromParams", ["$1","name"],"=> $name",
        "AngularJSPrivate.SetYourName", ["$name"]
    ],

    "AngularJS.GetYourName":[
        "AngularJSPrivate.GetYourName", "=> $nameOut"
    ],

    "AngularJS.CheckYourName":[
        "Just.GetValueFromParams", ["$1","name"],"=> $nameIn",
        "AngularJSPrivate.GetYourName", "=> $nameOut",
        "AngularJSPrivate.CheckYourName", ["$nameIn", "$nameOut"], "=> $nameOut"
    ]
};

module.exports = AngularJSKeywords;
