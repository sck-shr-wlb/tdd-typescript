import { startWorkflow } from "../src/Iworkflow"; 
import mockAdapter from 'axios-mock-adapter'
import axios from "axios";

    describe("iWorkflow", () => {
        const mock = new mockAdapter(axios)
        it("เมื่อ start workflow แล้วจะต้องได้ instanceId = 1970324836981899", async () => {
            const headers = {
                Accept: 'application/json, text/plain, */*',
                key:"YAGR0Z3%ASDJASLKJ123",
                code:"WK001",
                bu:"BU1",
                timezone: "5294923649234237",
                "Content-Type": "application/json"
            }
            mock.onPost("http://localhost:8000/workflowservice/startWorkflow",{},headers).reply(200,{
                    "instanceId": "1970324836981899",
                    "processName": "Process Name 1",
                    "statusCode": "200"
            })
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

        it("เมื่อ start workflow แล้วจะต้องได้ status code 500", async () => {
            mock.reset()
            mock.onPost("http://localhost:8000/workflowservice/startWorkflow").reply(500,{
                  "error":"internal server error"
            })
            const key = 'YAGR0Z3%ASDJASLKJ123';
            const code = 'WK001';
            const bu = 'BU1';
            // Arrange
            const expected = "internal server error";

            // Action
            const result = await startWorkflow(key,code,bu)

            // Assert
            expect(result.error).toBe(expected);
        })
    })