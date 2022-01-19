function runProgram(input) {
    var newInput = input.split("\n");
    var cases = newInput[0];
    for (var i = 0; i <=  2*cases-2 ; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split("").map(Number);


        function makeArrayEven() {
            var sum = 0;
            var count = 0;
  
            for (var i = 0; i < data.length; i++) {
                sum += data[i];
            }
  
            if (sum % 2 == 0) {
                return "YES";
            }
  
            if (sum % 2 != 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i] % 2 == 0) {
                        count++;
                    }
                }
            }
   
            if (count > 0) {
                return "YES";
            }
            else {
                return "NO";
            }
             
        }
        console.log(makeArrayEven());
            
    }
   
}

if (process.env.USER === "kishore") {
    runProgram(`2
1
2
3
1 2 3`);
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