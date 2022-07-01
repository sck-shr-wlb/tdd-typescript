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
    it('เมื่อเลข Arabic มีค่าเท่ากับ 5 เลข Roman จะต้องเป็น V',()=>{
        
        const expectedRomanNumber = "V";

       const romanNumber = convertRomanNumber(5);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 6 เลข Roman จะต้องเป็น VI',()=>{
        
        const expectedRomanNumber = "VI";

       const romanNumber = convertRomanNumber(6);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 7 เลข Roman จะต้องเป็น VII',()=>{
        
        const expectedRomanNumber = "VII";

       const romanNumber = convertRomanNumber(7);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 8 เลข Roman จะต้องเป็น VIII',()=>{
        
        const expectedRomanNumber = "VIII";

       const romanNumber = convertRomanNumber(8);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 9 เลข Roman จะต้องเป็น IX',()=>{
        
        const expectedRomanNumber = "IX";

       const romanNumber = convertRomanNumber(9);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    it('เมื่อเลข Arabic มีค่าเท่ากับ 10 เลข Roman จะต้องเป็น X',()=>{
        
        const expectedRomanNumber = "X";

       const romanNumber = convertRomanNumber(10);

       romanNumber.should.be.equal(expectedRomanNumber);

    })
    
    
})
