var expect = require("chai").expect; //jshint ignore:line
var methods = require("../script");

describe("#sum", function(){
  it("adds two numbers", function(){
    expect(methods.sum(1,2)).to.equal(3);
  });
  it("works with negative numbers", function(){
    expect(methods.sum(-1,2)).to.equal(1);
  });
});

describe("#isEqual", function(){
  it("compares numbers", function(){
    expect(methods.isEqual(1,2)).to.equal(false);
  });
  it("compares strings", function(){
    expect(methods.isEqual(-1,-1)).to.equal(true);
  });
  it("compares booleans", function(){
    expect(methods.isEqual(true,true)).to.equal(true);
  });
  it("compares type and equality (using ===)", function(){
    expect(methods.isEqual("1",1)).to.equal(false);
  });
});

describe("#isEven", function(){
  it("returns true if a number is even", function(){
    expect(methods.isEven(2)).to.equal(true);
  });
  it("returns false if a number is not even", function(){
    expect(methods.isEven(3)).to.equal(false);
  });
});

describe("#isDivisible", function(){
   it("returns true if a number is divisible by the second argument", function(){
    expect(methods.isDivisible(2,2)).to.equal(true);
  });
  it("returns false if a number is not divisible by the second argument", function(){
    expect(methods.isDivisible(3,2)).to.equal(false);
  });
});

describe("#discountPercentage", function(){
  it("returns the discount for an amount", function(){
    expect(methods.discountPercentage(100,5)).to.equal(5);
  });
  it("returns a warning if the percentage is below 0", function(){
    expect(methods.discountPercentage(3,-5)).to.equal("please enter a number between 0 and 100");
  });
  it("returns a warning if the percentage is above 100", function(){
    expect(methods.discountPercentage(3,102)).to.equal("please enter a number between 0 and 100");
  });
});

describe("#isVowel", function(){
  it("returns true if a letter is a vowel", function(){
    expect(methods.isVowel("a")).to.equal(true);
  });
  it("returns false if a letter is not a vowel", function(){
    expect(methods.isVowel("z")).to.equal(false);
  });
});

// BONUS - write a test for the bonus question!