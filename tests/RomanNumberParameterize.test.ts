import { convertRomanNumber } from "../src/RomanConvertNumber";
import "should"

 const fn = ({number,expected}) => {
    const romanNumber = convertRomanNumber(number);
    romanNumber.should.be.equal(expected);
  }

it.each([
    {number: 1, expected: 'I'},
    {number: 2, expected: 'II'},
    {number: 3, expected: 'III'},
    {number: 4, expected: 'IV'},
    {number: 5, expected: 'V'},
    {number: 494, expected: 'CDXCIV'},
  ])('เมื่อเลข Arabic มีค่าเท่ากับ $number เลข Roman จะต้องเป็น $expected', fn);