let tab= [ 4, 6, 4, 9, 4, 10, 11];


function Tris_Bulle(tab){

    let test = false;
    let i = 1;
    
    while(i<tab.length){
        let j = 0
        let n ;
        while (j<tab.length){
            if(tab[j-1]>tab[j]){
                n=tab[j-1];
                tab[j-1]=tab[j];
                tab[j]=n;
                

            }
            j++;
        }
        i++
            

    }
    console.log(tab);
        
}
Tris_Bulle(tab);