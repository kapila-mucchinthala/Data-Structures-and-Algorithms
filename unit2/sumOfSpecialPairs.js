function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        for (var j = i+1; j < data.length; j++) {
            if (i<j && (prime(j-i)== "Prime")) {
                sum += Math.abs(data[i] - data[j]);
                //console.log(sum);
            }
        }
    }
    console.log(sum);
   

    function prime(x) {
        var count = 0;
        for (var a = 1; a <= x; a++) {
            if (x % a == 0) {
                count++;
                
            }
        }
        if (count ==2) {
            return "Prime"
        }

            return "Not Prime"
        
    }
   


}
if (process.env.USER === "kishore") {
    runProgram(`6
1 2 3 5 7 12`);
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