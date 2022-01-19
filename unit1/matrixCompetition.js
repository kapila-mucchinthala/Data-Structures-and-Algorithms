function arraySum(data) {
    var sum = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            sum = sum + data[i][j];
        }
    }
    return sum
}

function lines2Array(row) {
    return row.split(" ").map(Number);
}

function runProgram(input) {
    var inputSplit = input.split("\n");
    var arr1Rc = inputSplit[0].split(" ").map(Number);
    var r1 = arr1Rc[0];
    var arr2Rc = inputSplit[r1 + 1].split(" ").map(Number);
    var r2 = arr2Rc[0];

    var arr1Lines = inputSplit.slice(1, r1 + 1);
    var arr2Lines = inputSplit.slice(r1 + 2);

    var data1 = arr1Lines.map(lines2Array);
    var data2 = arr2Lines.map(lines2Array);

    var sum1 = arraySum(data1);
    var sum2 = arraySum(data2);

    if (sum1 > sum2) {
        console.log(sum1);
    }
    else {
        console.log(sum2);
    }

    
}

if (process.env.USER === "kishore") {
    runProgram(`3 4
1 2 3 4
0 5 6 1
9 3 0 8
2 2
8 8
8 8`);
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