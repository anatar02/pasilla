// Node packages that are required for the automated testing:
// npm install jasmine-spec-reporter@1.1.0
// npm install jasmine-reporters@1.0.0
// npm install keyword
// npm install dictionaryjs
// npm install replace
// npm install async (optional)

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    allScriptsTimeout: 300000,

    onPrepare: function () {
        require('jasmine-reporters');
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

        var replace = require("replace");
        replace({
            regex: "key.webdriver = require",
            replacement: "//key.webdriver  =  require",
            paths: ['./node_modules/keyword/lib/keyword.js'],
            recursive: false,
            silent: true
        });

        var d = new Date();
        fs = require('fs');
        browser.params.saveFolder = browser.params.saveFolder + "/AutomatedTestResults";
        if (!fs.existsSync(browser.params.saveFolder)) {
            fs.mkdir(browser.params.saveFolder);
        }

        browser.getCapabilities().then(function (cap) {
            browser.params.browserName = cap.caps_.browserName + cap.caps_.version.substr(0, 2);
            jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(browser.params.saveFolder, true, true, browser.params.browserName + "."));
        });
    },

    onComplete: function () {
    },

    params: {
        testEnv: 'local',
        saveFolder: '/temp',
        browserName: 'Browser'
     },

    jasmineNodeOpts: {
        DefaultTimeoutInterval: 600000
    },

    'loggingPrefs': {
        'browser': 'ALL'
    },

    specs: [
        './tests/MyTestName/*.pro.js'
    ],

    reporters: ['spec', 'coverage']
};

