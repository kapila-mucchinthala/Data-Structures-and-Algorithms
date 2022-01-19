function runProgram(input) {
    var newInput = input.split("\n");
    var data1 = newInput[0].split("");
    var data2 = newInput[1].split("");

    // console.log(data1);
    // console.log(data2);
    var max = 0;
    var count = 0;
    for (var i = 0; i < data1.length; i++){
        for (var j = 0; j < data2.length; j++){
            if (data1[i] == data2[j]) {
                count++;
                console.log(count);
                console.log(data2[j]);
                console.log("----------");
                data2[j] = "*";
                continue;
            }
        }
         
    }
    // console.log(count);
}
if (process.env.USER === "kishore") {
  runProgram(`eziowiomkvrrdzx
orugiebaolddavd`);
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