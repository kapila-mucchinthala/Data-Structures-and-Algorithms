function diamondTraversal(data, n){
    var m = data.length - 1;
    var result = "";
    
    for (var i = n/2 - 0.5; i >= 0; i--){
        result += data[i][m--] + " ";
    }
    for (var i = 1; i < n/2 + 0.5; i++){
        result += data[i][m--] + " ";
    }
    m = 1;
    for (var i = n/2 - 0.5 + 1; i <= n-1; i++){
        result += data[i][m++] + " ";
    }
    for (var i = n - 2; i > n/2 - 0.5; i--){
        result += data[i][m++] + " ";
    }
    return result;
}

function runProgram(input){
    var newInput = input.trim().split("\n");
  
    for(var i = 1; i < newInput.length; i++){
       var lineOne = newInput[i].split(" ").map(Number);
       var n = lineOne[0];
       var data = [];
       
       for(var j = i + 1; j <= i + n; j++){
           var row = newInput[j].split(" ").map(Number);
           data.push(row);
       }
       i += n 
       console.log(diamondTraversal(data,n));
    } 
    
}
if (process.env.USER === "kishore") {
    runProgram(`1
3
1 2 3
4 5 6
7 8 9`);
} else {
    
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
        process.exit(0);
    });
}