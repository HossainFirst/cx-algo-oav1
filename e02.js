function IsAPangrams(str){
    str = str.toLowerCase();
    str = str.replace(/\s/g, ""); // expression reguliere 
    //console.log(str);
    let arrayStr = str.split('');
    //console.log(arrayStr);
    let withoutDoublon = [...new Set(arrayStr)];
    if (withoutDoublon.length == 26){
        return true;
    }
    else{
        return false;
    }
}
console.log(IsAPangrams("the quick brown fox jumps over the lazy dog"));

        
    