"use strict";
require("should");
const HelloWorld_1 = require("../src/HelloWorld");
describe("HelloWorld", () => {
    describe("Say Hi", () => {
        it("should say Hi, karan", () => {
            const expected = "Hi, Karan";
            let tested = new HelloWorld_1.HelloWorld();
            const result = tested.sayHi("karan");
            result.should.be.equal(expected);
        });
    });
});
//# sourceMappingURL=HelloWorldTest.js.map