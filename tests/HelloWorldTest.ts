import "should"

import { HelloWorld } from "../src/HelloWorld";

describe("HelloWorld", () => {
    describe("Say Hi", () => {
        it("should say Hi, karan", () => {
            const expected = "Hi, Karan";
            let tested: HelloWorld = new HelloWorld();
            const result = tested.sayHi("karan");
            result.should.be.equal(expected);
        })
    })
});