function runProgram(input) {
    var newInput = input.trim().split("\n");
    var target = +newInput[0];
    var arr = +newInput[1].split(" ").map(Number);
    var dep = +newInput[2].split(" ").map(Number);
   

function findOverlap(arr, dep, target) {
  var overlapCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (dep[i] > arr[i + 1]) {
      overlapCount++;
    }
  }
  if (overlapCount < target) {
    return "Possible";
  } else {
    return "Not Possible";
  }
}
     console.log(findOverlap(arr, dep, target));
}




if (process.env.USER === "kishore") {
  runProgram(`1
1 3 5
2 6 8`);
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