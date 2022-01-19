function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].split(" ").map(Number);

   
    var count = 0;
    for (var a = 0; a < n; a++){
        if (a == 0) {
            if (data[0] > data[1]) {
                count++;
            }
        }
        if (a == n - 1) {
             if (data[n-1] > data[n-2]) {
                count++;
            }
        }
        if (data[a] > data[a - 1] && data[a] > data[a + 1]) {
            // console.log(data[a]);
            count++;
        }
        
    }
    console.log(count);


    
}

if (process.env.USER === "kishore") {
    runProgram(`5
8 0 -2 1 -4`);
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
