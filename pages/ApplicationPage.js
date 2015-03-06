var ApplicationPage = (function () {
    var product;

    function ApplicationPage() {

        this.toasterMessage = element.all(by.className('toast-container'))
    }

    ApplicationPage.prototype.ToasterMessagesVisible = function () {
        return element.all(by.className('toast-message'));
    };

    return ApplicationPage;
})();

module.exports = ApplicationPage;