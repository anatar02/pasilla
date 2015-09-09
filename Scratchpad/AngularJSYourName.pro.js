describe('AngularJSYourName', function () {
	
    browser.get('https://angularjs.org/');
// -----------------------------------------------------------------------------
	it('Enter and check your name part 1', function () {
		element(by.model('yourName')).clear();
		element(by.model('yourName')).sendKeys('CARL');
		expect(element(by.binding('yourName')).getText()).toEqual('Hello CARL!');
	}, 600000);

// -----------------------------------------------------------------------------
	it('Enter and check your name part 2', function () {
		element(by.model('yourName')).clear();
		element(by.model('yourName')).sendKeys('CARL');
		expect(element(by.binding('yourName')).getText()).toEqual('Hello Carl!');
	}, 600000);

// -----------------------------------------------------------------------------
	it('Last "it" that always passes', function () {
		expect(true).toBeTruthy();
	}, 600000);
	
}, 600000);
