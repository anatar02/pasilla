var Urls = (function () {
    function Urls() {}
    Urls.prototype.load = function (dict) {
        dict.set('SYSTEST', 'http://www.google.com');
        dict.set('LIVE', 'http://www.google.com');
        dict.set('UAT', 'http://www.google.com');
        dict.set('LOCAL', 'http://localhost');
        dict.set('LOCALHOST', 'http://localhost');
        dict.set('SYSTEST', 'http://web.systest.aom.dev.argusmedia.com');
        dict.set('LIVE', 'http://aom.argusmedia.com/');
        dict.set('UAT', 'http://aomuat.argusmedia.com/');

    };
    return Urls;
})();
module.exports = Urls;

