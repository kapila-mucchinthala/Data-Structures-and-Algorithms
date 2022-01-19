function newSortingAlgo(data, N, K) {
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < N - i - 1; j++)
      if (data[j] % K > data[j + 1] % K) {
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
  }
  return data.join(" ");
}
function runProgram(input) {
  var newInput = input.split("\n");
  var [N, K] = newInput[0].split(" ").map(Number);
  var data = newInput[1].split(" ").map(Number);
  console.log(newSortingAlgo(data, N, K));
}

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
