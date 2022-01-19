function runProgram(input) {
    var data = input;
    var str = '';
    var temp = data[0];
    var count = 0;
    for (let i = 0; i < data.length; i++) {
        if (temp == data[i]) {
            count++;
        }
        else {
            str += temp+count;
            temp = data[i];
            count = 1;
        }
    }
    str += temp+ count;
    console.log(str);
}

if (process.env.USER === "kishore") {
  runProgram(`aaabbbbcc`);
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

// function runProgram(input) {
//     var data = input;
//     var obj = {};
//     for (let i = 0; i < data.length; i++) {
//         if (obj[data[i]] == undefined) {
//             obj[data[i]] = 1;
//         }
//         else {
//             obj[data[i]] =obj[data[i]]+1;
//         }
//     }
//     var str = '';
//     for (i in obj) {
//         str += i+obj[i];
//     }
//     console.log(str);
// }