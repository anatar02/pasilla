# <img width="67" src="https://github.com/jenglezou/pasilla/blob/master/documentation/ImagesForWiki/flame-clipart-red-flame-hi.png"/> pasilla 

Noun (plural **pasillas**) - pronounced **[pah-SEE-ya]**

1. a variety of chili (literally "little raisin") is the dried form of the chilaca chili pepper, used especially in sauces.
2. a hot little test framework for Protractor.

### Acknowledgements
Pasilla relies heavily on the **[keyword](https://www.npmjs.com/package/keyword)** node package. My thanks for this and for the other node packages listed as dependencies below.

A special mention goes to [Chris Roberts-York](https://github.com/ChrisRobertsYork) and [Ivan Kadev](https://github.com/ivkad) for their invaluable involvement.

## Dependencies
* __[Node.js](https://nodejs.org)__ 

* Node package ***[protractor](https://www.npmjs.com/package/protractor)*** - npm install protractor -g
* Node package ***[keyword](https://www.npmjs.com/package/keyword)*** - npm install keyword
* Node package ***[dictionaryjs](https://www.npmjs.com/package/dictionaryjs)*** - npm install dictionaryjs
* Node package ***[replace](https://www.npmjs.com/package/replace)*** - npm install replace
* Node package ***[jasmine-reporters](https://www.npmjs.com/package/jasmine-reporters)*** - npm install jasmine-reporters@1.0.1
* Node package ***[jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter)*** - npm install jasmine-spec-reporter@1.1.0

**Optional**
* Node package ***[async](https://www.npmjs.com/package/async)*** - npm install async

## Intro
Pasilla is a framework that allows a tester to create Protractor tests without writing any JavaScript code.  The tester uses familiar tools to simply assemble a sequence of keywords and data into a test script.  Excel is used to create the test script and is also used to maintain a centralised store of test data.  Pasilla provides utilities to automatically convert the Excel test script and data into pure JavaScript Protractor code.  This means that the tests can be run using any tool that supports Protractor like WebStorm IDE, Grunt and TeamCity.  So, Pasilla takes the pain out of developing Protractor tests without losing the benefits of the Jasmine BDD format and the integration with other tools.


It all sounds a little too good to be true and, in a way, it is.  The JavaScript Protractor code underpinning each keyword still has to be handcrafted.  Pasilla helps with this by standardising the way in which the keyword program code is written - how it is called, how it handles data passed to it, and how it can be reused and combined with other keywords.
