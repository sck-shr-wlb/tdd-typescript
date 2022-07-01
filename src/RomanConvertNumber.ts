export const convertRomanNumber = (num : number) => {
    let arrRoman = ['I']
    let arrNumber = [1]
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
    for(;num >= 4;num -= 4){
        Roman += 'IV' ;
    }
    
    arrRoman.forEach((element,index) => {
        for(; num >= arrNumber[index] ; num -= arrNumber[index]){
            Roman += arrRoman[index];
    }
    });
    
    return Roman;
}