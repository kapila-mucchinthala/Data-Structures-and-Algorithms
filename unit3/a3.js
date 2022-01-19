function lines2Array(row) {
    return row.split(" ").map(Number);
}
  function runProgram(input) {
    var inputSplit = input.split("\n");
    var arr1Rc = inputSplit[0].split(" ").map(Number);
    var r1 = arr1Rc[0];
    var arr1Lines = inputSplit.slice(1, r1 + 1);
    var data = arr1Lines.map(lines2Array);
    
  
    function nonPrimeCheck() {
      // var result = 0;
      var count = 0;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
          if (prime(data[i][j]) == "True") {
            // console.log(data[i][j]);
            count++;
              // result += data[i][j];
          }
          
        }
      }
      return count;

    }
    function prime(x) {
        var count = 0;
      for (var a = 1; a <= x; a++) {
        if (x == 1) {
            return "True";
          }
          if (x % a == 0) {
            count++;
          }
        }
        if (count >= 3) {
          return "True"
        }
        else if(count < 3) {
          return "False"
        }
    }

  console.log(nonPrimeCheck());
    

    
}

if (process.env.USER === "kishore") {
    runProgram(`3 3
1 2 3
4 5 6
7 8 9
`);
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