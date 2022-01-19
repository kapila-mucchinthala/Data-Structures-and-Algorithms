function runProgram(input) {
 var newInput = input.split("\n");
 var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2];
        
       
     function cipherString() {
         var result = "";
         var count = 1;
         var temp = data[0];
  
        for(var i=1;i<n;i++) {
           if(data[i] == temp) {
            count++;
           }
            else {
               result += temp + count;
                count = 1;
                  temp = data[i];
           }
              
        }
          result += temp + count;
           return result
     
     }
           
       console.log(cipherString())
        
    }
}

if (process.env.USER === "kishore") {
    runProgram(`2
5
aabcc
5
aazaa`);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}