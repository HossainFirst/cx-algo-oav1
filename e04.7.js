let tab= [ 4, 6, 4, 9, 4, 10, 11];



function Max(tab){
    let max=tab[0];

    for(let i = 1; i<tab.length; i++ ){
        
        if(tab[i]<max){
            max = tab[i-1];

        }
        else {
            max = tab[i];
        }
    }
    console.log(max);
}

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


function Diff(tab){
    let max=tab[0];

    for(let i = 1; i<tab.length; i++ ){
        
        if(tab[i]<max){
            max = tab[i-1];

        }
        else {
            max = tab[i];
        }
    }

    let min=tab[1];
    let i = 0;
    while(i<tab.length){
        if(min>tab [i]){ 
            min = tab[i]
           }
            i++
    }


    let diff = max-min;

    console.log(diff);

}
Diff(tab);