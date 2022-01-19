//  function easy(data,n) {
//             if (n==1) {
//                 return data[0];
//             }
//             return easy(data,n-1) + data[n-1];
// }

// function runProgram(input) {
//   var newInput = input.split("\n");
//   var cases = Number(newInput[0]);
//     for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
//         var n = Number(newInput[i + 1]);
//         var data = newInput[i + 2].trim().split(" ").map(Number);
//         var output = easy(data,n);
//         console.log(output);

//     }
// }


// if (process.env.USER === "kishore") {
//     runProgram(`3
// 5
// 6 3 8 2 -4
// 5
// -10 -7 10 2 -2
// 5
// -4 -5 6 -3 9`);
// } else {
//         process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//         read += input;
//   });
//   process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//     runProgram(read);
//       process.exit(0);
//   });
// }



var arr = [6, 3, 8, 2, -4];

function easy(i) {
  if (i === arr.length - 1) {
    return arr[i];
  } else {
    return arr[i] + easy(i + 1);
  }
}
console.log(easy(0));


