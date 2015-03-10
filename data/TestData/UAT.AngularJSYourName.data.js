var TestData = (function () {
	   function TestData() {}
	    TestData.prototype.load = function (dictData) {
		dictData.set('#SESSION1.USERNAME#', 'AB');
		dictData.set('#NAME#', 'value');
		dictData.set('#RANDOM1#', '{RANDOM(100, 20000, 10)}');
		dictData.set('#{RANDOM1}#', 'RANDOM(100, 20000, 10)');
		dictData.set('#RANDOM2#', '{RANDOM(10, 9999, 1)}');
		dictData.set('#{RANDOM2}#', 'RANDOM(10, 9999, 1)');
		dictData.set('#SEQUENCE1#', '{SEQUENCE(100, 2)}');
		dictData.set('#{SEQUENCE1}#', 'SEQUENCE(100, 2)');
		dictData.set('#ENVIRONMENT#', 'UAT');
		dictData.set('#VERSION#', '1');
		dictData.set('#CREATEME#', 'True');
	};
		return TestData;
})();
module.exports = TestData;
