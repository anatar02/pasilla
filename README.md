# <img width="67" src="https://github.com/jenglezou/pasilla/blob/master/documentation/ImagesForWiki/flame-clipart-reds-flame-hi.png"/> pasilla 

Noun (plural **pasillas**) - pronounced **[pah-SEE-ya]**

1. a variety of chili (literally "little raisin"), it is the dried form of the chilaca chili pepper, used especially in sauces.
2. a hot little test framework for [AngularJS](https://angularjs.org/) using [Protractor](https://www.npmjs.com/package/protractor).

### Acknowledgements
Pasilla relies heavily on the [keyword](https://www.npmjs.com/package/keyword) node package. Thanks for this and also for the other node packages listed as dependencies below.

A special mention goes to [Chris Roberts-York](https://github.com/ChrisRobertsYork) and [Ivan Kadev](https://github.com/ivkad) for their invaluable involvement.

## Dependencies
* [Node.js](https://nodejs.org) platform
* Node package [protractor](https://www.npmjs.com/package/protractor) - npm install protractor -g
* [Java](https://java.com/en/download) - needed for the selenium-standalone-server that protractor uses
* Node package [keyword](https://www.npmjs.com/package/keyword) - npm install keyword
* Node package [dictionaryjs](https://www.npmjs.com/package/dictionaryjs) - npm install dictionaryjs
* Node package [replace](https://www.npmjs.com/package/replace) - npm install replace
* Node package [jasmine-reporters](https://www.npmjs.com/package/jasmine-reporters) - npm install jasmine-reporters@1.0.1
* Node package [jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter) - npm install jasmine-spec-reporter@1.1.0

**Optional**
* Node package [async](https://www.npmjs.com/package/async) - npm install async

## About Pasilla
Pasilla makes Protractor accessible to anyone who wants to create end-to-end tests but is not comfortable with coding in Javascript using the Jasmine BDD structure or, to be frank, using other BDD languages like Gherkin. So, with this user in mind, Pasilla is a framework that generates Protractor tests from keyword and data-driven test scripts. It introduces a tabular keyword-driven scripting capability whilst keeping the benefits of  Protractor's Jasmine BDD format and its integration with IDEs and CI tools. It's not magic - the program code behind each keyword still needs to be written in JavaScript by a developer. Pasilla helps with this by standardising the way in which the keyword code is written - how it is called, how it handles data passed to it, and how it can be reused and combined with other keywords.

The [wiki](https://github.com/jenglezou/pasilla/wiki) (see the sidebar on the right-hand side) provides more information.

