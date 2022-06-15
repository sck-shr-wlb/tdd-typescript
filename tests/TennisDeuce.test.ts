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

    it('เมื่อ Score เป็น Deuce ถ้า A ทำแต้มได้ Score จะต้องเป็น Advantage for A',()=>{
        const expectedScore = "Advantage for A";

       const tennis = new Tennis();
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()

       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })

    it('เมื่อ Score เป็น Deuce ถ้า B ทำแต้มได้ Score จะต้องเป็น Advantage for B',()=>{
        const expectedScore = "Advantage for B";

       const tennis = new Tennis();
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.bWonPoint()

       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })

    it('เมื่อทั้งสองได้แต้ม 4 - 4 Score จะต้องเป็น Deuce',()=>{
        const expectedScore = "Deuce";

       const tennis = new Tennis();
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()

       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })

    it('เมื่อทั้งสองได้แต้ม 5 - 5 Score จะต้องเป็น Deuce',()=>{
        const expectedScore = "Deuce";

       const tennis = new Tennis();
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()

       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })

    it('เมื่อ A และ B ได้แต้ม 5 - 6 ตามลำดับ Score จะต้องเป็น Advantage for B',()=>{
        const expectedScore = "Advantage for B";

       const tennis = new Tennis();
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.bWonPoint()

       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })

    it('เมื่อ A และ B ได้แต้ม 5 - 7 ตามลำดับ Score จะต้องเป็น Win for B',()=>{
        const expectedScore = "Win for B";

       const tennis = new Tennis();
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.aWonPoint()
       tennis.bWonPoint()
       tennis.bWonPoint()
       tennis.bWonPoint()

       const actualScore = tennis.score();

        actualScore.should.be.equal(expectedScore);

    })
    
});