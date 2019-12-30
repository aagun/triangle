function triAngle1(num){
    /*
    *
    * *
    * * *
    * * * *
    * * * * *
    */

    let rows = num;
    for(let i = 1; i <= rows; i++){
        let inp = "";
        for(let space = 1; space <= i; space++){
            inp += "* ";
        }
        console.log(inp);
    }
}

function triAngle2(num){
    /*
    * * * * *
    * * * *
    * * *
    * *
    *
    */

    let rows = num;
    for(let i = 1; i <= rows; i++){
        let inp = "";
        for(let space = 1; space <= (rows - (i-1)); space++){
            inp += "* ";
        }
        console.log(inp);
    }
}

function triAngle3(num){
    /*
        *
       * *
      * * *
     * * * *
    * * * * *
    */

    let rows = num;

    for(let i = 1; i <= rows; i++){
        let inp = "";
        for(let space = 1; space <= (rows - i); space++){
            inp += " ";
        }
        for(let star = 1; star <= i; star++){
            inp += "* ";
        }
        console.log(inp);
    }
}

function triAngle4(num){
    /*
            *
          * *
        * * *
      * * * *
    * * * * *
    */

    let rows = num;
    for(let i = 1; i <= rows; i++){
        let inp = "";
        for(let space = 1; space <= (rows - i); space++){  
            inp += "  ";
        }
        for(let star = 1; star <= i ; star++){  
            inp += "* ";
        }
        console.log(inp);
    }
}

function triAngle5(num){
    /*
    * * * * *
      * * * *
        * * *
          * *
            *
    */

    let rows = num;
    for(let i = 1; i <= rows; i++){
        let inp = "";
        for(let space = 2; space <= i; space++){  
            inp += "  ";//doublespace
        }
        for(let star = 1; star <= ((rows - i) + 1); star++){  
            inp += "* ";
        }
        console.log(inp);
    }
}
