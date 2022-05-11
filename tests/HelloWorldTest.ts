import "should"

import { HelloWorld } from "../src/HelloWorld";

describe("HelloWorld", () => {

    describe("Say Hi", () => {
        it("should say Hi, karan", () => {
            // Arrange
            const hello = new HelloWorld();
            const expected = "Hi, Karan";

            // Action
            const result = hello.sayHi("Karan");

            // Assert
            result.should.be.equal(expected);
        })
    })
});