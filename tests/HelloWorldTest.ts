import "should"

import { HelloWorld } from "../src/HelloWorld";

describe("HelloWorld", () => {
    describe("Say Hi", () => {
        it("should say Hi, karan", () => {
            const expected = "Hi, Karan";
            let tested: HelloWorld = new HelloWorld();
            const result = tested.sayHi("Karan");
            result.should.be.equal(expected);
        }),

        it("should say Hi, bomb0069", () => {
            const expected = "Hi, bomb0069";
            let tested: HelloWorld = new HelloWorld();
            const result = tested.sayHi("bomb0069");
            result.should.be.equal(expected);
        })
    })
});