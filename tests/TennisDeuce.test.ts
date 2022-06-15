import "should"
import { Tennis } from "../src/Tennis";


describe("Tennis Deuce", () => {
    it('เมื่อทั้งสองได้แต้มมากกว่าเท่ากับ40และเท่ากัน Score จะต้องเป็น Deuce',()=>{
        const expectedScore = "Deuce";

       const tennis = new Tennis();
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()

       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })
    
});