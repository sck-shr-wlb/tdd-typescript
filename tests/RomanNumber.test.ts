import "should"
import {convertRomanNumber} from '../src/RomanConvertNumber'

describe("RomanNumber", () => {
    it('เมื่อเลข Arabic มีค่าเท่ากับ 1 เลข Roman จะต้องเป็น I',()=>{
        
        const expectedRomanNumber = "I";

       const romanNumber = convertRomanNumber(1);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 2 เลข Roman จะต้องเป็น II',()=>{
        
        const expectedRomanNumber = "II";

       const romanNumber = convertRomanNumber(2);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 3 เลข Roman จะต้องเป็น III',()=>{
        
        const expectedRomanNumber = "III";

       const romanNumber = convertRomanNumber(3);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 4 เลข Roman จะต้องเป็น IV',()=>{
        
        const expectedRomanNumber = "IV";

       const romanNumber = convertRomanNumber(4);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    
})
