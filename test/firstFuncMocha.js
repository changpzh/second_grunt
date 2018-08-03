const firstFunc = require("../src/firstFunc");
const expect = require("chai").expect;

describe("first test firstFunc", function() {
    it("test result of first Mocha", function() {
        firstFunc.func().then(function(result) {
            expect(result).to.be.equal(3);
        });
    });
});

