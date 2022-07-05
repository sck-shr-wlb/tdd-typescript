import "should"
import {arrRomanArabic, convert, convertRomanNumber} from '../src/RomanConvertNumber'

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

    it('เมื่อเลข Arabic มีค่าเท่ากับ 13 เลข Roman จะต้องเป็น XIII',()=>{
        
        const expectedRomanNumber = "XIII";

       const romanNumber = convertRomanNumber(13);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 14 เลข Roman จะต้องเป็น XIV',()=>{
        
        const expectedRomanNumber = "XIV";

       const romanNumber = convertRomanNumber(14);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 19 เลข Roman จะต้องเป็น XIX',()=>{
        
        const expectedRomanNumber = "XIX";

       const romanNumber = convertRomanNumber(19);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 24 เลข Roman จะต้องเป็น XXIV',()=>{
        
        const expectedRomanNumber = "XXIV";

       const romanNumber = convertRomanNumber(24);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 40 เลข Roman จะต้องเป็น XL',()=>{
        
        const expectedRomanNumber = "XL";

       const romanNumber = convertRomanNumber(40);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 44 เลข Roman จะต้องเป็น XLIV',()=>{
        
        const expectedRomanNumber = "XLIV";

       const romanNumber = convertRomanNumber(44);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 59 เลข Roman จะต้องเป็น LIX',()=>{
        
        const expectedRomanNumber = "LIX";

       const romanNumber = convertRomanNumber(59);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 90 เลข Roman จะต้องเป็น XC',()=>{
        
        const expectedRomanNumber = "XC";

       const romanNumber = convertRomanNumber(90);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 100 เลข Roman จะต้องเป็น C',()=>{
        
        const expectedRomanNumber = "C";

       const romanNumber = convertRomanNumber(100);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 494 เลข Roman จะต้องเป็น CDXCIV',()=>{
        
        const expectedRomanNumber = "CDXCIV";

       const romanNumber = convertRomanNumber(494);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 500 เลข Roman จะต้องเป็น D',()=>{
        
        const expectedRomanNumber = "D";

       const romanNumber = convertRomanNumber(500);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 949 เลข Roman จะต้องเป็น CMXLIX',()=>{
        
        const expectedRomanNumber = "CMXLIX";

       const romanNumber = convertRomanNumber(949);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 1000 เลข Roman จะต้องเป็น M',()=>{
        
        const expectedRomanNumber = "M";

       const romanNumber = convertRomanNumber(1000);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 1000 เลข Roman จะต้องเป็น M โดยการเพิ่ม format',()=>{
        
        const expectedRomanNumber = "M";

       const romanNumber = convertRomanNumber(1000,arrRomanArabic);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 14 เลข Roman จะต้องเป็น XF',()=>{
        
        const expectedRomanNumber = "XF";

        const format = [{roman:'X',arabic:10},{roman:'F',arabic:4}]

       const romanNumber = convertRomanNumber(14,format);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 11 เลข Roman จะต้องเป็น XI',()=>{
        
        const expectedRomanNumber = "XI";

        const format = [{roman:'X',arabic:10},{roman:'I',arabic:1}]

       const romanNumber = convertRomanNumber(11,format);

       romanNumber.should.be.equal(expectedRomanNumber);

    })

    it('เมื่อเลข Arabic มีค่าเท่ากับ 11 เลข Roman จะต้องเป็น XI และ 14 เลข Roman จะต้องเป็น XF',()=>{
        
        const expectedRomanNumber = "XI";

        const format = [{roman:'X',arabic:10},{roman:'F',arabic:4},{roman:'I',arabic:1}]

       const romanNumber = convert(format);

       romanNumber(11).should.be.equal(expectedRomanNumber);
       romanNumber(14).should.be.equal("XF");

    })
    
})
