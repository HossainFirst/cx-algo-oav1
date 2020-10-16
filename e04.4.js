let tab= [0, 4, 6, 4, 9, 4, 10];

function Min(tab){
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
console.log(Min(tab));
