function arraySum(p,q) {
    for (var i = 0; i < p.length; i++) {
    var sum = "";
      for (var j = 0; j < q[i].length; j++) {
            sum += p[i][j] + q[i][j] + " ";
        }
        console.log(sum);
    }
}

function lines2Array(row) {
    return row.split(" ").map(Number);
} 
function runProgram(input) {
    var inputSplit = input.split("\n");
    var rc = inputSplit[0].split(" ").map(Number);

    var a = rc[0];
    var b = rc[1];
    var c = rc[2];
    var d = rc[3];

    var matrix1 = inputSplit.slice(1, a + 1);
    var matrix2 = inputSplit.slice(a + 1);

    var data1 = matrix1.map(lines2Array);
    var data2 = matrix2.map(lines2Array);

    if (a == c && b == d) {
        arraySum(data1,data2);
    }
    else {
        console.log("-1");
    }

}

if (process.env.USER === "kishore") {
    runProgram(`2 3 2 3
1 4 1
3 2 2
2 3 1
4 5 1`);
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