function howManyCamelCase(str) {
    let x = str.length;
    let nbmot = 1;
    for (let i = 0; i < x; i++) {
        if ( str.charAt(i) == str.charAt(i).toUpperCase()){
            nbmot ++;

        }
      }
    console.log(nbmot);
}
howManyCamelCase("ceciEstUnMotNouveau");
