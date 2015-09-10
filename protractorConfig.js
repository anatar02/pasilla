// Node packages that are required for the automated testing:
// npm install jasmine-spec-reporter@1.1.0
// npm install jasmine-reporters@1.0.0
// npm install keyword
// npm install dictionaryjs
// npm install replace
// npm install async (optional)

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine2',

    allScriptsTimeout: 300000,

    onPrepare: function () {
 
        var replace = require("replace");
        replace({
            regex: "key.webdriver = require",
            replacement: "//key.webdriver  =  require",
            paths: ['./node_modules/keyword/lib/keyword.js'],
            recursive: false,
            silent: true
        });

        // returning the promise makes protractor wait for the capabilities before executing tests 
		return browser.getCapabilities().then(function (cap) {
			var sBrowser = cap.caps_.browserName + cap.caps_.version.substr(0, 2) ;

			var SpecReporter = require('jasmine-spec-reporter');
			jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
	   
			var reporters = require('jasmine-reporters');
			jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
					consolidateAll: false, //true,
					savePath: browser.params.saveFolder,
					filePrefix: sBrowser + "."
			}));

			var htmlReporter = require('protractor-jasmine2-html-reporter');
			jasmine.getEnv().addReporter(new htmlReporter({
				consolidateAll: false, //true,
				savePath: browser.params.saveFolder,
				filePrefix: sBrowser + ".",
				screenshotsFolder: 'images',
				takeScreenshots: true,
				takeScreenshotsOnlyOnFailures: true
			}));
		
		});
    },

    onComplete: function () {
    },

    params: {
        testEnv: 'local',
        saveFolder: '/temp/AutomatedTestResults',
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

