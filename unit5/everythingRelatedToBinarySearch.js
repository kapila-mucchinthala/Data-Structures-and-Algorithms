
function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].split(" ").map(Number);
    var key = +newInput[2];

    var first = 0;
    var last = 0;
    var count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] == key) {
            count++;
            if (count == 1) {
                first = i;
            }
            last = i;
            
        }
    }
    console.log(first, last,count);
}
  
  
if (process.env.USER === "kishore") {
  runProgram(`6
1 1 1 2 2 2	
1`);
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