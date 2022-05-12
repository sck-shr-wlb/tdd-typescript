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
        }),

        it("หลังจากสร้าง Sale Order และทำการ Save Draft สถานะจะต้องเป็น Waiting for Update", () => {
            // Arrange
            const expectedStatus = "Waiting for Update";

            // Action
            const saleOrder = new SaleOrder();
            saleOrder.saveDraft();
            const result = saleOrder.getStatus();
            

            // Assert
            result.should.be.equal(expectedStatus);
        })
        it("หลังจาก status เป็น Waiting for Update และทำการ กด Submit สถานะจะต้องเป็น Wait for Approval", () => {
            // Arrange
            const expectedStatus = "Wait for Approval";

            // Action
            const saleOrder = new SaleOrder();
            saleOrder.saveDraft();
            saleOrder.submit();
            const result = saleOrder.getStatus();
           
            

            // Assert
            result.should.be.equal(expectedStatus);
        })
    })
});
