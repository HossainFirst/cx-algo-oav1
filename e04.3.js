let tab= [0, 4, 6, 4, 9, 4, -1];

function Min(tab){
    let min=tab[1];
    let i = 0;
    while(i<tab.length){
        if(min>tab [i]){ 
            min = tab[i]
           }
            i++
    }
    console.log(min);
    }
    
console.log(Min(tab));
