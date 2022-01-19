function sum(data) {
    var result = 0;
    var sum = "";
    for (var a = 0; a < data.length; a++) {
        result += data[a]; 
        sum += result + " ";         
    }
     console.log(sum);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = Number(newInput[i + 1]);
        var data = newInput[i + 2].trim().split(" ").map(Number);

      sum(data);

    }
}

if (process.env.USER === "kishore") {
    runProgram(`1
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