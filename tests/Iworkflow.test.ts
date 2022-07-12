import { startWorkflow } from "../src/Iworkflow";

    describe("iWorkflow", () => {
        it("เมื่อ start workflow แล้วจะต้องได้ instanceId = 1970324836981899", async () => {
            const key = 'YAGR0Z3%ASDJASLKJ123';
            const code = 'WK001';
            const bu = 'BU1';
            // Arrange
            const expected = "1970324836981899";

            // Action
            const result = await startWorkflow(key,code,bu)

            // Assert
            expect(result.instanceId).toBe(expected);
        })
    })