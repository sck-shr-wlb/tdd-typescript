import "should"

import { SaleOrder } from "../src/SaleOrder";

describe("SaleOrder", () => {

    describe("Success Case ", () => {
        let saleOrder;
        beforeEach(() => {
            saleOrder = new SaleOrder();
          });
        it("create SaleOrder status should be Draft", () => {
            // Arrange

            // Action
            const result = saleOrder.getStatus();

            // Assert
            result.should.be.equal(saleOrder.status);
        })

        it("หลังจากสร้าง Sale Order และทำการ Save Draft สถานะจะต้องเป็น Waiting for Update", () => {
            // Arrange

            // Action
            saleOrder.saveDraft();
            
            const result = saleOrder.getStatus();
            
            // Assert
            result.should.be.equal(saleOrder.waitingForUpdate);
        })
        it("หลังจาก status เป็น Waiting for Update และทำการ กด Submit สถานะจะต้องเป็น Waiting for Approval", () => {
            // Arrange

            // Action
            saleOrder.saveDraft();
            saleOrder.submit();

            const result = saleOrder.getStatus();
           
            // Assert
            result.should.be.equal(saleOrder.waitingForApproval);
        })

        it("ถ้าสถานะเป็น Rejected เมื่อกด submit ต้องเกิด error", () => {
            const expectedError = "ไม่สามารถกด submit ได้";
            
            saleOrder.setStatus(saleOrder.rejected);

            (function(){ saleOrder.submit() }).should.throw(expectedError);
        })

        it("ถ้าสถานะเป็น Rejected เมื่อกด submit ต้องเกิด error Jest", () => {
            const expectedError = "ไม่สามารถกด submit ได้";
            
            saleOrder.setStatus(saleOrder.rejected);

            // (function(){ saleOrder.submit() }).should.throw(expectedError);

            expect(() =>  saleOrder.submit()).toThrow(expectedError);
        })

        it("หลังจากสร้าง Sale order แล้วทำการ submit สถานะจะต้องเป็น Waiting for Approval", () => {
            // Arrange


            // Action
            saleOrder.submit();

            const result = saleOrder.getStatus();
           
            // Assert
            result.should.be.equal(saleOrder.waitingForApproval);
        })

        it("หลังจาก Submit Sale Order แล้วสถานะจะเป็น Waiting for Approval แล้วกด Revise สถานะต้องเป็น Revising", () => {
            // Arrange


            // Action
            saleOrder.submit();
            saleOrder.revise();

            const result = saleOrder.getStatus();
           
            // Assert
            result.should.be.equal(saleOrder.revising);
        })

        it("หลังจากสถานะเป็น Revising ถ้ากด Submit สถานะจะต้องเป็น Waiting for Approval", () => {
            // Arrange

            // Action
            saleOrder.submit();
            saleOrder.revise();
            saleOrder.submit();

            const result = saleOrder.getStatus();
           
            // Assert
            result.should.be.equal(saleOrder.waitingForApproval);
        })        

      
    })
});
