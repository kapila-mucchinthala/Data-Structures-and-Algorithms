function runProgram(input) {
  var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].trim().split(" ").map(Number);
    var queries = +newInput[2];
  var q = newInput[3].split(" ").map(Number);

  for (let i = 0; i < q.length; i++){
    var temp = false;
    for (let j = 0; j < data.length; j++){
      if (q[i] == data[j]) {
        console.log("YES");
        temp = true;
        continue;
      }
    }
    if (temp==false) {
      console.log("NO");
    }
  }
}
if (process.env.USER === "kishore") {
  runProgram(`5
1 2 3 4 5
3
3 5 7`);
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


  //   var obj = {};
  // for (let a = 0; a < data.length; a++) {
  //   if (obj[data[a]] == undefined) {
  //     obj[data[a]] = 1;
  //   }
  //   else {
  //     obj[data[a]] =obj[data[a]]+1;
  //   }
  // }
  // for (let a = 0; a < q.length; a++) {
  //   var temp=false;
  //   for (i in obj) {
  //     if (q[a] == i) {
  //       console.log("YES");
  //       temp = true;
  //       break;
  //     }
  //   }
  //   if (temp==false) {
  //     console.log("NO");
  //   }
  // }