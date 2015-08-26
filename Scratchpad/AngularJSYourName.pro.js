describe('AngularJSYourName', function () {
	
    browser.get('https://angularjs.org/');
// -----------------------------------------------------------------------------
	it("Enter and check your name", function () {

		element(by.model('yourName')).sendKeys('KARL');
		expect(element(by.binding('yourName')).getText()).toEqual('Hello KARL!');

	}, 600000);

}, 600000);
