exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    framework: 'jasmine2',

    allScriptsTimeout: 300000,

    onPrepare: function () {

		var SpecReporter = require('jasmine-spec-reporter');
		jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
   
		var reporters = require('jasmine-reporters');
		jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
		        consolidateAll: true,
		        savePath: 'c:/temp',
		        filePrefix: 'xmloutput'
    	}));
		
		
		var htmlReporter = require('protractor-jasmine2-html-reporter');
		jasmine.getEnv().addReporter(new htmlReporter({
			savePath: 'c:/temp/',
			screenshotsFolder: 'images',
			takeScreenshots: true,
			takeScreenshotsOnlyOnFailures: false
		}));


	},

    params: {

	},

    jasmineNodeOpts: {
        DefaultTimeoutInterval: 600000
    },

    'loggingPrefs': {
        'browser': 'ALL'
    },

    'capabilities': {
        'browserName': 'internet explorer'
    },

    specs: [
        './tests/MyTestName/*.pro.js'
    ],

    reporters: ['spec', 'coverage']
};

