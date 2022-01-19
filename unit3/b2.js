function runProgram(input) {
  var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i <= 4 * cases - 2; i = i + 4){
    var n1 = +newInput[i + 1];
    var data1 = newInput[i + 2].split(" ").map(Number);
    var n2 = +newInput[i + 3];
    var data2 = newInput[i + 4].split(" ").map(Number);

    function JohnNashSet() {
      var result = "";
      for (let a = 0; a < n1; a++){
        
        for (let b = 0; b < n2; b++){
          if (data1[a] == data2[b]) {
            result += data1[a] + " ";
          }
        }
      }
      return result;
    }


  }
  console.log(JohnNashSet());
  
  
    
}
if (process.env.USER === "kishore") {
  runProgram(`1
4
1 2 3 4
5
1 2 3 4 5`);
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