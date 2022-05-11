import "should"

import { SaleOrder } from "../src/SaleOrder";

describe("SaleOrder", () => {

    describe("Success Case ", () => {
        it("create SaleOrder status should be Draft", () => {
            // Arrange
            const expectedStatus = "Draft";

            // Action
            const saleOrder = new SaleOrder();
            const result = saleOrder.getStatus();

            // Assert
            result.should.be.equal(expectedStatus);
        })

    })
});
