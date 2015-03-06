var key = require('keyword'); // keyword functionality
try { key(require('./Common.private.keywords')); } catch(err) { console.log(err) }
try { key(require('./Just.private.keywords')); } catch(err) { }

var CommonKeywords = {
    "Common.Wait":[
        "Just.GetValueFromParams", ["$1","delay"],"=> $delay",
        "CommonPrivate.Wait", ["$delay"]
    ]
};

module.exports = CommonKeywords;
