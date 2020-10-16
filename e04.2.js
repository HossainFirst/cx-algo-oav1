let tab= [0, 4, 6, 4, 9, 4];

function Average(tab){
    let div = tab.length;
    div--;
    let x = 0;
    for(let i = 0; i<tab.length; i++){
        x += tab[i];

    }
    console.log(x/div);
}
Average(tab);