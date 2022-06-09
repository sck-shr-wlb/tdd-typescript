import "should"
import { Tennis } from "../src/Tennis";


describe("Tennis", () => {
    it('เมื่อเริ่มเล่นแต้มต้องเป็น Love-Love',()=>{
        const expectedScore = "Love-Love";

       const tennis = new Tennis();
       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })
    
});