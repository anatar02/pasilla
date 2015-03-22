var Dictionary = require('dictionaryjs');
var dictData = new Dictionary();

try {
    var TestData = require("../../data/TestData/" + browser.params.testEnv + ".ExampleWithDataParameters.data.js");
    var testData = new TestData();
    testData.load(dictData);
} catch(err) {
    console.log(err)
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
describe('Pre-test setup for ExampleWithDataParameters', function () {

    it("Set PLACEHOLDERs for ExampleWithDataParameters test script", function () {
        var replace = require("replace");
        var sReplacement = "";

        var iMinValue = 0;
        var iMaxValue = 0;
        var iInterval = 0;

        var iStartValue = 0;
        var iIncrement = 0;
        var sResetOrigLine = "";
        var sResetNewLine = "";

        dictData.forEach(function(dicKey, dicValue) {
            switch(dicValue.substr(1,4).toUpperCase()){
                case "RAND":
                    iMinValue = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[0]).trim());
                    iMaxValue = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[1]).trim());
                    iInterval = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[2]).trim());
                    sReplacement = Math.floor((Math.random()*(iMaxValue - iMinValue +1) + iMinValue)/iInterval)*iInterval;
                    console.log ("Placeholder " + dicKey + " = " + dicValue + " (" + dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ") set to " + sReplacement);

                    replace({
                        regex: dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        replacement: sReplacement,
                        paths: ["./data/TestData/" + browser.params.testEnv + ".ExampleWithDataParameters.data.js"],
                        recursive: false,
                        silent: true
                    });

                    break;
                case "SEQU":
                case 'INCR':
                	//{SEQUENCE()) --> replacement
                    iStartValue = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[0]).trim());
                    iIncrement = Number((dicValue.substr(dicValue.indexOf("(")+1, dicValue.indexOf(")") - dicValue.indexOf("(")-1).split(",")[1]).trim());
                    sReplacement = iStartValue+iIncrement;
                    console.log ("Placeholder " + dicKey + " = " + dicValue + " (" + dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ") set to " + sReplacement);

                    replace({
                        regex: dicValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), 
                        replacement: sReplacement,
                        paths: ["./data/TestData/" + browser.params.testEnv + ".ExampleWithDataParameters.data.js"],
                        recursive: false,
                        silent: true
                    });

                    //------ now increment the reset version ----
                    sResetOrigLine = "'#{" + dicKey.replace(/#/g, '') + "}#', '" + dicValue.substr(1, dicValue.length-2) + "'";
                    sResetNewLine = sResetOrigLine.replace(iStartValue, sReplacement);
                    console.log ("Placeholder orig line " + sResetOrigLine + " set to " + sResetNewLine);

                    replace({
                        regex: sResetOrigLine.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        replacement: sResetNewLine,
                        paths: ["./data/TestData/" + browser.params.testEnv + ".ExampleWithDataParameters.data.js"],
                        recursive: false,
                        silent: true
                    });


                    break;
                default:
                    break;
            }
        });
    }, 600000);
}, 600000);