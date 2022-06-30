export const convertRomanNumber = (num : number) => {
    let Roman = '';
    if(num>3){
        return 'IV' ;
    }
    for(var x=1 ; x <= num ; x++){
            Roman += 'I'
    }
    
    return Roman;
}