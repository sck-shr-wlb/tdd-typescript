export const convertRomanNumber = (num : number) => {
    let Roman = '';
    for(var x=1 ; x <= num ; x++){
        Roman += 'I'
    }
    return Roman;
}