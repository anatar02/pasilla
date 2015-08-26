exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    allScriptsTimeout: 300000,

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

