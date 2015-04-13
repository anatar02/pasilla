describe('Example test scenario', function () {				
// ---------------------------------------------------  // ---------------------------------------------------
    it("Start", function () { 							     it("DoSomething C", function () {                 
		var browser="chrome";                                   var param1='data1';                            
		var url='http://www.Example.com';                       var param2='data2';                            
        // code for functionality goes here                     // code for functionality goes here            
        // can use expect().toEqual() for assertions            // can use expect().toEqual() for assertions   
    },120000);                                               },120000);                                        
// ---------------------------------------------------  // ---------------------------------------------------  
    it("Signin", function () {                          	it("DoSomething D", function () {                     
        var username='testuser1';                               var param1='data1';                            
		var password='3X4mpl3';                                 var param2='data2';                            
        // code for functionality goes here                     // code for functionality goes here            
        // can use expect().toEqual() for assertions            // can use expect().toEqual() for assertions   
    },120000);                                          	},120000); 
// ---------------------------------------------------  // ---------------------------------------------------    
    it("DoSomething A", function () {                   	it("DoSomething E", function () {  
        var param1='data1';                                     var param1='data1';                            
        var param2='data2';                                     var param2='data2';                            
        // code for functionality goes here             		// code for functionality goes here
        // can use expect().toEqual() for assertions    		// can use expect().toEqual() for assertions 
    },120000);                                          	},120000); 
// ---------------------------------------------------  // --------------------------------------------------- 
    it("DoSomething B", function () {                   	it("Signout", function () { 
        var param1='data1';                            
        var param2='data2';                            
        // code for functionality goes here              		// code for functionality goes here 
        // can use expect().toEqual() for assertions    		// can use expect().toEqual() for assertions 
    },120000);                                          	},120000);
                                                        // ---------------------------------------------------
                                                        	it("End", function () {
                                                        		// code for functionality goes here
                                                        		// can use expect().toEqual() for assertions
                                                        	},120000);   
                                                        }, 60000);   
                                                          
                                                          
                                                          
                                                          
                                                          





















