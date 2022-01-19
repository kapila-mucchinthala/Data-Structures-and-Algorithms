
function runProgram(input) {
    var data = input.split("");
    // console.log(data);
    var str = "";
    
    for (var a = 0; a < data.length; a++){
        if (data[a] != " ") {
            str += data[a];
        }
    }
    var sum = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < sum.length; j++){
             if (str[i] != sum[j]) {
            console.log(str[i]);
            sum.push(str[i]);
        }
       
        }
    }
    
    console.log(sum);
}


if (process.env.USER === "kishore") {
    runProgram(`my name is ankush`);
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