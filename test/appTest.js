const assert = require("chai").assert;
const sayHello = require("../app").sayHello;
const addNumbers = require('../app').addNumbers;

describe("App", () => {
	describe('sayHello',()=>{

  it("sayHello should return hello", function () {
    let result = sayHello();
    assert.equal(result, "hello");
  });
	it('sayHello should return type string',function(){
		let result = sayHello();
		assert.typeOf(result,"string")
	});

	})
	describe('addNumbers',()=>{

	it('add Numbers should be positive',function(){
		let result = addNumbers(5,1);
		assert.isAbove(result,0)
	})

	it('addNumbers should return type number',function(){
		let result = addNumbers();
		assert.typeOf(result,"number")
	});
	})
});
