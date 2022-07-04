export const convertRomanNumber = (num : number) => {
    let arrRoman = ['IV','I']
    let arrArabic = [4,1]
    let Roman = '';
    for (;num >= 10; num -= 10) {
        Roman += 'X';
    }
    
    for (;num >= 9; num -= 9) {
        Roman += 'IX';
    }
 
    for (;num >= 5; num -= 5) {
        Roman += 'V';
    }
    
    arrRoman.forEach((element,index) => {
        for(; num >= arrArabic[index] ; num -= arrArabic[index]){
            Roman += arrRoman[index];
    }
    });
    
    return Roman;
}