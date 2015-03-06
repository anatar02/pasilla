var DashboardPage = (function () {
    var productTitles;
    var numGrids;
    var totalBidAskRows;
    var bidAskRows;

    function DashboardPage() {

        this.headerUser = element.all(by.id("header-logged-on-user"));
        this.userOrganisation = element.all(by.className("header-user-role"));
        this.prodTitles = element.all(by.binding('productTitle | capitalize'));
        this.bidAskRows = element.all(by.repeater('row in renderedRows'));
        this.bidAskRowsColumns = element.all(by.repeater('col in renderedColumns'));
        this.openBidButtons = element.all(by.id('btnOpenBid'));
        this.openAskButtons = element.all(by.id('btnOpenAsk'));

        // Bid/ask buttons on top of the grids
        this.newBidButtons = element.all(by.id('newBidButton'));
        this.newAskButtons = element.all(by.id('newAskButton'));

        // Bid/Ask stack arrow buttons
        this.newBidAskGridDownButtons = element.all(by.id('bidAskGridDownButton'));
        this.newBidAskGridUpButtons = element.all(by.id('bidAskGridUpButton'));

        this.dealButton = element.all(by.className("btn-deal"));

        this.marketInfoButton = element.all(by.className("btn-market"));

        // this should really be in a header object but ...
        this.logoutButton = element(by.id('logout'));
    }

    DashboardPage.prototype.isLoaded = function (timeout) {
        var bRetVal = false;

        for (var i = 0; i <= timeout; i++) {
            element.all(by.id('newBidButton')).then(function (newBids) {
                if (newBids.length > 0) {
                    bRetVal = true;
                    i = timeout;
                } else {
                    browser.sleep(1000);
                }
            }); //NewBids
        }

        return bRetVal;
    };

    DashboardPage.prototype.waitForLoad = function (timeout) {

        // Wait for dashboard grids to show ...
        for (var i = 0; i <= timeout; i++) {
            element.all(by.id('newBidButton')).then(function (newBids) {
                if (newBids.length > 0) {
                    i = timeout;
                } else {
                    browser.sleep(1000);
                }
            }); //NewBids
        }

        return element.all(by.id('newBidButton'));
    };

    DashboardPage.prototype.getHeaderUser = function () {
        return this.headerUser;
    };

    DashboardPage.prototype.getOrganisation = function () {
        return this.userOrganisation;
    };

    DashboardPage.prototype.logout = function (url) {
        this.logoutButton.click();
    };

    DashboardPage.prototype.gridCount = function () {
        return numGrids;
    };

    DashboardPage.prototype.getProductTitles = function () {
        return this.prodTitles.map(function(element, index) {
                return {
                    index: index,
                    text: element.getText()
                }
            }
         )
    };

    DashboardPage.prototype.bidAskRowCount = function () {
        return totalBidAskRows;
    };

    DashboardPage.prototype.openOrder = function (index) {
        this.bidAskRows.get(index).click();
    };

    DashboardPage.prototype.Bids = function () {
        return this.openBidButtons;
    };

    DashboardPage.prototype.openBid = function (index) {
        this.openBidButtons.get(index).click();
    };

    DashboardPage.prototype.Asks = function () {
        return this.openAskButtons;
    };

    DashboardPage.prototype.openAsk = function (index) {
        this.openAskButtons.get(index).click();
    };

    DashboardPage.prototype.allBidAskRows = function () {
        return this.bidAskRows;
    };

    DashboardPage.prototype.allBidAskRowsColumns = function () {
        return this.bidAskRowsColumns;
    };

    DashboardPage.prototype.newBid = function (index) {
        this.newBidButtons.get(6*index+5).click();
    };

    DashboardPage.prototype.newAsk = function (index) {
        this.newAskButtons.get(6*index).click();
    };

    DashboardPage.prototype.headingText = function (index) {
        return productTitles[index].getText();
    };

    DashboardPage.prototype.moveBidAskGrid = function (index, changeX, changeY) {
        browser.actions().dragAndDrop(productTitles[index],{x:changeX, y:changeY}).perform();
    };

    DashboardPage.prototype.getBidAskGridLocation = function (index) {
        return productTitles[index].getLocation();
    };

    DashboardPage.prototype.expandGrid = function (index) {
        this.newBidAskGridDownButtons.get(index).click();
    };

    DashboardPage.prototype.gridDownButtons = function () {
        return this.newBidAskGridDownButtons;
    };

    DashboardPage.prototype.collapseGrid = function (index) {
        this.newBidAskGridUpButtons.get(index).click();
    };

    DashboardPage.prototype.ClickNewDealButton = function () {
        this.dealButton.click();
    };

    DashboardPage.prototype.ClickNewMarketInfoButton = function () {
        this.marketInfoButton.click();
    };

    return DashboardPage;
})();

module.exports = DashboardPage;
