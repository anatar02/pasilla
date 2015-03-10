var AngularJSHomePage = (function () {

    function AngularJSHomePage() {

        this.yourNameIn = element(by.model('yourName'));
        this.yourNameOut = element(by.binding('yourName'));
    }

    AngularJSHomePage.prototype.setYourName = function (Name) {
        this.yourNameIn.clear();
        this.yourNameIn.sendKeys(Name);
    };

    AngularJSHomePage.prototype.getYourName = function () {
        return this.yourNameOut.getText();
    };

    return AngularJSHomePage;

})();

module.exports = AngularJSHomePage;
