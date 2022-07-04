export const convertRomanNumber = (num : number) => {
    let arrRoman = ['X','IX','V','IV','I']
    let arrArabic = [10,9,5,4,1]
    let Roman = '';
    
    arrRoman.forEach((element,index) => {
        for(; num >= arrArabic[index] ; num -= arrArabic[index]){
            Roman += arrRoman[index];
    }
    });
    
    return Roman;
}