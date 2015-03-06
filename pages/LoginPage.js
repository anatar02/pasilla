fs = require('fs');  //Need this for saving screenshot file

var LoginPage = (function () {

    function LoginPage() {

        this.signInButton = element(by.id('signInBtn'));
        //this.usernameInput = element(by.model('username'));
        this.usernameInput = element(by.id('username'));
        this.passwordInput = element(by.id('password'));
        //this.failedText = element(by.id('loginFailed'));
        this.failedText = element(by.binding('loginMessage'));
        this.rememberMeChk = element(by.id('rememberMe'));
    }

    LoginPage.prototype.isDisplayed = function () {
        return element.all(by.id('signInBtn'));
    };

    LoginPage.prototype.waitForLoad = function (timeout) {

        for (var i = 0; i <= timeout; i++) {
            element.all(by.id('signInBtn')).then(function (SignIn) {
                if (SignIn.length === 0) {
                    browser.sleep(1000);
                } else {
                    i = timeout+1;
                }
            });
        }

        return element.all(by.id('signInBtn'));
    };

    LoginPage.prototype.failText = function () {
        return this.failedText.getText();
        //return element(by.id('loginFailed')).getText();
        //return failMessage;
    };

    LoginPage.prototype.signIn = function () {
        this.signInButton.click();
    };

    LoginPage.prototype.username = function (sUsername) {
        this.usernameInput.sendKeys(sUsername);
    };

    LoginPage.prototype.getUsername = function () {
        return this.usernameInput.getAttribute('value');
    };

    LoginPage.prototype.password = function (sPassword) {
        this.passwordInput.sendKeys(sPassword);
    };

    LoginPage.prototype.rememberMe = function (bChecked) {
        var remChecked;

        this.rememberMeChk.getAttribute('checked').then(function (Rem) {
            remChecked = Rem;
        });

        if (bChecked == true) {
            if (remChecked = null) {
                this.rememberMeChk.click();
            }
        } else {
            if (remChecked = 'true') {
                this.rememberMeChk.click();
            }
        }
    };

    LoginPage.prototype.getRememberMe = function () {
        return this.rememberMeChk.getAttribute('checked');
    };

    LoginPage.prototype.setRememberMe = function () {
        this.rememberMeChk.click();
     };

    LoginPage.prototype.login = function (sUsername, sPassword, bBeforeSignIn, sScreenshotFilename) {

        this.usernameInput.clear();
        this.usernameInput.sendKeys(sUsername);
        this.passwordInput.clear();
        this.passwordInput.sendKeys(sPassword);

        if (bBeforeSignIn === true){
            // Capture screenshot
            if (sScreenshotFilename != '') {
                browser.takeScreenshot().then(function (png) {
                    stream = fs.createWriteStream(sScreenshotFilename);
                    stream.write(new Buffer(png, 'base64'));
                    stream.end();
                }); //png
            }
            this.signInButton.click();
        } else {
            this.signInButton.click();
            // Capture screenshot
            if (sScreenshotFilename != '') {
                browser.takeScreenshot().then(function (png) {
                    stream = fs.createWriteStream(sScreenshotFilename);
                    stream.write(new Buffer(png, 'base64'));
                    stream.end();
                }); //png
            }
        }

        /*
        browser.sleep(2000);
        browser.switchTo().alert().then(
            function (alert) {
                alert.accept();
            },
            function (error) {
            }
        );
        */

    };

    LoginPage.prototype.doLogin = function (sUsername, sPassword) {
        this.usernameInput.sendKeys(sUsername);
        this.passwordInput.sendKeys(sPassword);
        this.signInButton.click();
    };

    LoginPage.prototype.doLoginWithScreenshot = function (sUsername, sPassword, sFilename) {

        this.usernameInput.sendKeys(sUsername);
        this.passwordInput.sendKeys(sPassword);

        // Capture screenshot
        browser.takeScreenshot().then(function (png) {
            stream = fs.createWriteStream(sFilename);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        }); //png

        this.signInButton.click();
    };

    return LoginPage;

})();

module.exports = LoginPage;
