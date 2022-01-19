function runProgram(input) {
    var data = input.split("");
    var total = 0;
    for (var a = 0; a < data.length; a++){
        var subStr = "";
        for (var b = a; b < data.length; b++){
            subStr += data[b];
            if (subStr.length > 3 && findSubstring(subStr) == "True") {
                total++;
            }
        }
    }
     console.log(total);

    function findSubstring(subStr) {
        var count = 0;
        for (var i = 0; i < subStr.length; i++){
            if (subStr[i] == "a") {
                count++;
                break;
            }
        }
       
        for (var i = 0; i < subStr.length; i++){
            if (subStr[i] == "i") {
                count++;
                break;
            }
        }
        for (var i = 0; i < subStr.length; i++){
            if (subStr[i] == "o") {
                count++;
                break;
            }
        }
        for (var i = 0; i < subStr.length; i++){
            if (subStr[i] == "u") {
                count++;
                break;
            }
        }
        if (count == 4) {
            return "True"
        }
        return "False"
    }

}

if (process.env.USER === "kishore") {
    runProgram(`dangerouscovid`);
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