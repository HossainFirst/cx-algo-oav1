function countArray(element){
    let arrayElements= [0, 4, 6, 4, 9, 4];
    let counter = 0
    for(let i = 0; i<arrayElements.length; i++){
        if(arrayElements[i] == element){
            counter++;
        }
    }
    console.log(counter);

}
console.log(countArray(4));