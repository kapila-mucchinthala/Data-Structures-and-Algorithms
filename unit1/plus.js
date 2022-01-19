var n = 6;

    for (var i = 1; i <= (2 * n) + 1; i++) {
       var result = "";
        if (i == Math.ceil((2 * n + 1) / 2)) {
            for (var k= 1; k <= 2 * n + 1; k++) { 
                result += "*";
            }
            console.log(result);
        }
        else {
            for (var k = 1; k <= n; k++) {
                result += " ";
            }
            result += "*";
            console.log(result);
        } 
    }


    //   var number = 2;
    //   var n = (2 * number) + 1;
      
    //   for (var i = 0; i < (n - 1) / 2; i++) {
    //         var result = "";
    //         for (var j = 0; j < (n - 1) / 2; j++) {
    //               result += "-";
    //         }
    //         result += "*";
    //         console.log(result);
    //   }
    //   var result = "";
    //   for (var i = 0; i < n; i++) {
    //         result += "*";
    //   }
    //   console.log(result);
    //   for (var i = 0; i < (n - 1) / 2; i++) {
    //         var result = "";
    //         for (var j = 0; j < (n - 1) / 2; j++) {
    //               result += "-";
    //         }
    //         result += "*";
    //         console.log(result);
    //   }