import "should"

import { HelloWorld } from "../src/HelloWorld";

describe("HelloWorld", () => {
    let tested: HelloWorld;

    beforeEach(() => tested = new HelloWorld());

    describe("Say Hi", () => {
        it("should say Hi, karan", () => {
            const expected = "Hi, Karan";
            const result = tested.sayHi("Karan");
            result.should.be.equal(expected);
        }),

        it("should say Hi, bomb0069", () => {
            const expected = "Hi, bomb0069";
            const result = tested.sayHi("bomb0069");
            result.should.be.equal(expected);
        })
    })
});