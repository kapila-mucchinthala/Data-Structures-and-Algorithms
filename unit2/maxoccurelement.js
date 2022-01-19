function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);
    var N = Number(newInput[0]);

    var count = {};
    for (var i = 0; i < N; i++) {
        if (count[arr[i]] == undefined) {
            count[arr[i]] = 1;
        }
        else {
            var prev = count[arr[i]];
            count[arr[i]] = prev + 1;
        }
    }

    var max = 0;
    var result = "";
    for (i in count) {
        if (max < count[i]) {
            max = count[i];
            result = i;
        }
        
    }
   
    console.log(result);  
}

if (process.env.USER === "kishore") {
    runProgram(`5
0 2 0 6 9`);
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