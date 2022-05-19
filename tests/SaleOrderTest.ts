import "should"

import { SaleOrder } from "../src/SaleOrder";

describe("SaleOrder", () => {

    describe("Success Case ", () => {
        it("create SaleOrder status should be Draft", () => {
            // Arrange
            const status = "Draft";

            // Action
            const saleOrder = new SaleOrder();
            const result = saleOrder.getStatus();

            // Assert
            result.should.be.equal(status);
        })

        it("หลังจากสร้าง Sale Order และทำการ Save Draft สถานะจะต้องเป็น Waiting for Update", () => {
            // Arrange
            const status = "Waiting for Update";

            // Action
            const saleOrder = new SaleOrder();
            saleOrder.saveDraft();
            
            const result = saleOrder.getStatus();
            
            // Assert
            result.should.be.equal(status);
        })
        it("หลังจาก status เป็น Waiting for Update และทำการ กด Submit สถานะจะต้องเป็น Waiting for Approval", () => {
            // Arrange
            const status = "Waiting for Approval";

            // Action
            const saleOrder = new SaleOrder();
            saleOrder.saveDraft();
            saleOrder.submit();

            const result = saleOrder.getStatus();
           
            // Assert
            result.should.be.equal(status);
        })

        it("ถ้าสถานะเป็น Rejected เมื่อกด submit ต้องเกิด error", () => {
            const expectedError = "ไม่สามารถกด submit ได้";
            try{
                // Arrange
                const status = "Rejected";
                // Action
                const saleOrder = new SaleOrder();
                saleOrder.setStatus(status);
                saleOrder.submit();

                expectedError.should.be.equal('')
            }catch(e){
                e.message.should.be.equal(expectedError)
            }
        })

        it("หลังจากสร้าง Sale order แล้วทำการ submit สถานะจะต้องเป็น Waiting for Approval", () => {
            // Arrange
            const status = "Waiting for Approval";

            // Action
            const saleOrder = new SaleOrder();
            saleOrder.submit();

            const result = saleOrder.getStatus();
           
            // Assert
            result.should.be.equal(status);
        })
    })
});
