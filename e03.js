function marsos(str){
    let lettreorigine = "SO";
    lettreorigine= lettreorigine.split('');
    arrayMSG = str.split('');
    let withoutDoublon = [...new Set(arrayMSG)];
    //console.log(withoutDoublon);
    let cara = '';
    for(let i = 0; i<withoutDoublon.length; i++){
        if ( lettreorigine.indexOf(withoutDoublon[i]) === -1){
            cara+=withoutDoublon[i]+', ';
        }
        
            
        
        
    
    }
    console.log(cara);





}
console.log(marsos('SOOSOOSOOSOSOSWTF'))