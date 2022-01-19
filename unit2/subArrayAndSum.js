function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[0].split(" ").map(Number);
    var data = newInput[1].split(" ").map(Number);
    var k = line[1];

    var data2 = [];
    for (var a = 0; a < data.length; a++) {
        var sum = 0;
        var count = 0;
        for (var b = a; b < data.length; b++) {
            sum += data[b];
            count++;
        
            if (sum % k != 0) {
                //console.log(count);
                data2.push(count);
            }
        }
    }
    
    var temp = data2[0];
    for (var i = 0; i < data2.length; i++) {
        if (data2[i]>temp) {
            temp = data2[i];
        }
    }
    var total = 0;
    for (i = 0; i < data2.length; i++) {
        if (data2[i] == temp) {
            total++;
        }
    }
    console.log(total);
    
}

if (process.env.USER === "kishore") {
    runProgram(`4 3
2 3 4 6`);
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
