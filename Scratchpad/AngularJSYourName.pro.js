describe('AngularJSYourName', function () {
	
    browser.get('https://angularjs.org/');
// -----------------------------------------------------------------------------
	it("Enter and check your name", function () {

		element(by.model('yourName')).sendKeys('CARL');
		expect(element(by.binding('yourName')).getText()).toEqual('Hello CARL!');
		//expect(element(by.binding('yourName')).getText()).toEqual('Hello Carl!');

	}, 600000);

}, 600000);
