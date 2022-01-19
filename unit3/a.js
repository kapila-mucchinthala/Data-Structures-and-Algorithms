function runProgram(input) {
  var newInput = input.split("\n");
  var cases = Number(newInput[0]);
  for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
    var n = +newInput[i + 1];
    var data = newInput[i + 2].split(" ").map(Number);

    function NextGreaterEven() {
      var result = 0;
      for (var a = 0; a < n; a++) {
        for (var b = a + 1; b <= n; b++) {
          if (data[b] > data[a] && data[b] % 2 == 0) {
              
            result = data[a];
            console.log(result);
            break;
            
          }
        }
      }
       return result
    }
      
      console.log(NextGreaterEven());
  }
  
    
}
if (process.env.USER === "kishore") {
  runProgram(`1
5
2 4 5 8 3`);
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