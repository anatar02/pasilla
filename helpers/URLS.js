var Urls = (function () {
    function Urls() {}
    Urls.prototype.load = function (dict) {
        dict.set('SYSTEST', 'https://angularjs.org/');
        dict.set('LIVE', 'https://angularjs.org/');
        dict.set('UAT', 'https://angularjs.org/');
        dict.set('LOCAL', 'http://localhost');
        dict.set('LOCALHOST', 'http://localhost');
    };
    return Urls;
})();
module.exports = Urls;

