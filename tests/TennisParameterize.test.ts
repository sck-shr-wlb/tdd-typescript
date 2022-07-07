import "should"
import { Tennis } from "../src/Tennis";

const fn = ({pointA,pointB,expected}) => {
    const tennis = new Tennis();
    for (let index = 0; index < pointA; index++) {
        tennis.aWonPoint();
    }
    for (let index = 0; index < pointB; index++) {
        tennis.bWonPoint();
    }
    const actualScore = tennis.score();
    actualScore.should.be.equal(expected);
  }

it.each([
    {pointA: 1,pointB:0, expected: '15-Love'},
    {pointA: 2,pointB:0, expected: '30-Love'},
    {pointA: 1,pointB:1, expected: '15-15'},
  ])('เมื่อ Player A ได้แต้ม $pointA แต้ม และ PlayerB ได้แต้ม $pointB แต้ม ต้องเป็น $expected', fn);
  
   