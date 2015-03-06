var Resources = require("../helpers/resources.js");
var Async = require("async");
var key = require('keyword');
var csv = require('ya-csv');
try { key(require('./just.private.keywords')); } catch(err) { }


waitFunction = function(delay){
    console.info('--------------------  In COMMON.WAIT   ---------------------------- ');
    console.info('in CommonPrivate.Wait: ' + delay);
    setTimeout(function(){
        //do what you need here
        brwoser.sleep(delay);
    }, delay);
};

sleepFunction = function(milliseconds) {
    var start = new Date().getTime();
    console.info('in CommonPrivate.sleepFunction: ' + milliseconds);
    for (var i = 0; i < 1e7; i++) {
        console.info('in for loop');
        
    }
};

var CommonPrivateKeywords = {
    "CommonPrivate.Wait" : function(next,delay){
        //waitFunction(delay);
        console.info('in CommonPrivate.Wait ' + delay);
        sleepFunction(5000000);
        //next();
    }
};

module.exports = CommonPrivateKeywords;
