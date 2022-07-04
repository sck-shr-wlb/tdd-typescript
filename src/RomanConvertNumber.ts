export const convertRomanNumber = (num : number) => {
    let arrRoman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let arrArabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let Roman = '';
    
    arrRoman.forEach((element,index) => {
        for(; num >= arrArabic[index] ; num -= arrArabic[index]){
            Roman += arrRoman[index];
    }
    });
    
    return Roman;
}