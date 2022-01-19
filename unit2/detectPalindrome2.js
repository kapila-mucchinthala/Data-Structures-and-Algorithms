function runProgram(input) {
    var newInput = input.split("\n");
    var cases = newInput[0];
    for (var i = 0; i <=  2*cases-2 ; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split("");

        function detectPalindrome() {
            var obj = {};
            for (var a = 0; a < n; a++){
                if (obj[data[a]] == undefined) {
                    obj[data[a]] = 1;
                }
                else {
                    var prev = obj[data[a]];
                    obj[data[a]] = prev + 1;
                    
                }
            }
            var count = 0;
            for (a in obj) {
                if (obj[a] % 2 != 0) {
                    count++;
                   // console.log(count);
                 }
             }
            if (count <= 1) {
                 return "Yes"
            }
            else {
                return "No"
            }

        }
        console.log(detectPalindrome());
        
    }
   
}

if (process.env.USER === "kishore") {
    runProgram(`3
1
a
3
aab
4
abbb`);
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