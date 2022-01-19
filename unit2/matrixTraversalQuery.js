function traversalQueries(data, q, row, col) {
  var result = "";
  if (q == 1) {
    for (var i = 0; i < row; i++) {
        if (i % 2 !== 0) {
            for (var j = col - 1; j >= 0; j--) {
                result += data[i][j] + " ";
            }
        } else {
            for (var k = 0; k < col; k++) {
                result += data[i][k] + " ";
            }
        }
    }
  } else if (q == 2) {
    for (var i = 0; i < row; i++) {
      if (i % 2 === 0) {
        for (var j = col - 1; j >= 0; j--) {
          result += data[i][j] + " ";
        }
      } else {
        for (var k = 0; k < col; k++) {
          result += data[i][k] + " ";
        }
      }
    }
  }
  return result;
}
function runProgram(input) {
  var newInput = input.split("\n");
  var n = +newInput[0];
  var j = 1;
  for (var i = 0; i < n; i++) {
    var [row, col, q] = newInput[j++].split(" ").map(Number);
    var data = [];
    for (var k = 0; k < row; k++) {
      data.push(newInput[j++].split(" ").map(Number));
    }
    console.log(traversalQueries(data, q, row, col));
  }
}

if (process.env.USER === "kishore") {
    runProgram(`2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
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