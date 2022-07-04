export const convertRomanNumber = (num : number) => {
    let arrRoman = ['M','CM','D','CD','C','XC','L','XL','X','IX']
    let arrArabic = [1000,900,500,400,100,90,50,40,10,9]
    let arrRomanArabic = [{roman:'V',arabic:5},{roman:'IV',arabic:4},{roman:'I',arabic:1}]
    let Roman = '';
    
    arrRoman.forEach((element,index) => {
        for(; num >= arrArabic[index] ; num -= arrArabic[index]){
            Roman += arrRoman[index];
    }
    });

    arrRomanArabic.forEach(element =>{
        for(; num >= element.arabic ; num -= element.arabic){
            Roman += element.roman;
    }
    })
    
    return Roman;
}