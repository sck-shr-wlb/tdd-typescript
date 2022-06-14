import "should"
import { Tennis } from "../src/Tennis";


describe("Tennis", () => {
    it('เมื่อเริ่มเล่นแต้มต้องเป็น Love-Love',()=>{
        const expectedScore = "Love-Love";

       const tennis = new Tennis();
       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })
    
    it('เมื่อ Player A ได้แต้ม แต้มต้องเป็น 15-Love',()=>{
        const expectedScore = "15-Love";

        const tennis = new Tennis();
        tennis.aWonPoint();
        const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })

    it('เมื่อ Player A ได้แต้ม 2 แต้มต้องเป็น 30-Love',()=>{
        const expectedScore = "30-Love";

        const tennis = new Tennis();
        tennis.aWonPoint();
        tennis.aWonPoint();
        const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })
});