var Automation = require("../../helpers/automation.js");
var automation = new Automation();
var key = require('keyword'); // keyword functionality
var Dictionary = require('dictionaryjs');

var dictData = new Dictionary();
try {
    var TestData = require("../../data/TestData/" + browser.params.testEnv + ".AngularJSYourName.data.js");
    var testData = new TestData();
    testData.load(dictData);
} catch(err) {
    console.log(err)
}

var dictURLS = new Dictionary();
var Urls = require("../../helpers/URLS.js");
var urls = new Urls();
urls.load(dictURLS);

// -----------------------------------------------------------------------------
describe('AngularJSYourName.Session2', function () {
    var iStep = 1;

    browser.get(dictURLS.get(browser.params.testEnv.toUpperCase()));

    /*
    // Trying this to jump out after a failed it/step
    afterEach(function() {
        if (!this.results().passed()) {
                return false;
        }
    });
    */

// -----------------------------------------------------------------------------
    automation.using("running Session2 test script", require('./Session2.script.js'),
        function (step) {
            var sParams = "";
            var sObject = step.action.substring(0, step.action.indexOf('.'));
            for (var property in (step.params)[0]) {
                if ((step.params)[0].hasOwnProperty(property)) {
                    (step.params)[0][property] = automation.resolveParams(dictData, (step.params)[0][property]);
                    sParams = sParams + property + '=' + (step.params)[0][property] + ',';
                }
            }

            it("Step " + (('0' + iStep++).slice(-2)) + ": Keyword=" + step.action + ", Data=[" + sParams + "]", function () {
                if (step.action.slice(0,1) != '#') {
                    //Load keyword file (name must be in the form 'object.keywords.js'). "try" handles exception when loading same object.keywords.js file
                    try { key(require('../../keywords/' + sObject + '.keywords.js')); } catch(err) {
                        console.log(err)
                    }
                    key.run(step.action, step.params).then(function () { });
                }
            }, 600000);
        });

}, 600000);
