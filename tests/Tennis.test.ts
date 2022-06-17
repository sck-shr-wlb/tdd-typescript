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

    it('เมื่อ Player A ได้ 3 แต้มต้องเป็น 40-Love',()=>{
        const expectedScore = "40-Love"

        const tennis = new Tennis();
        tennis.aWonPoint();
        tennis.aWonPoint();
        tennis.aWonPoint();

        const actualScore = tennis.score();

       actualScore.should.be.equal(expectedScore)
        

    })

    it('เมื่อ Player A ได้ 4 แต้ม และ Player A ชนะ', () => {
        const expectedScore = 'Win for A'
        
        const tennis = new Tennis();
        tennis.aWonPoint();
        tennis.aWonPoint();
        tennis.aWonPoint();
        tennis.aWonPoint();

        const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore)

    })

    it('เมื่อ Player B ได้แต้ม แต้มต้องเป็น Love-15',()=>{
        const expectedScore = "Love-15";

        const tennis = new Tennis();
        tennis.bWonPoint();
        const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })

    it('เมื่อ Player B ได้ 4 แต้ม และ Player B ชนะ', () => {
        const expectedScore = 'Win for B'
        
        const tennis = new Tennis();
        tennis.bWonPoint();
        tennis.bWonPoint();
        tennis.bWonPoint();
        tennis.bWonPoint();

        const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore)

    })
    it('เมื่อ Player A ได้แต้ม แต้มต้องเป็น Fifteen-Love',()=>{
        const expectedScore = "Fifteen-Love";

        const tennis = new Tennis(['Love','Fifteen','Thirty','Forty']);
        tennis.aWonPoint();
        const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })
    it('เมื่อ Player A ได้ 3 แต้ม และ Player A ชนะ', () => {
        const expectedScore = 'Win for A'
        
        const tennis = new Tennis(['Love','15','30']);
        tennis.aWonPoint();
        tennis.aWonPoint();
        tennis.aWonPoint();

        const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore)

    })

});