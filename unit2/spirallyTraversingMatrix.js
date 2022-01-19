  function runProgram(input){
    var newInput = input.trim().split("\n");
    var data = [];
    for (var i = 1; i < newInput.length; i++){
        var row = newInput[i].split(" ").map(Number);
        data.push(row);
    }
    var n = data.length;
    console.log(spiralTraversal(data,n));
  }
    
  
    function spiralTraversal(data,n){
   var top = 0;
   var bottom = n - 1;
   var left = 0;
   var right = n - 1;
   var size  = n * n;
   var count = 0;
   var result = "";
   while (count < size){
         for (var i = top; i <= right && count < size; i++){
              result += data[top][i] + " ";
              count++;
         }
         top++;
         for (var i = top; i <= bottom && count < size; i++){
              result += data[i][right] + " ";
              count++;
         }
         right--;
         for (var i = right; i >= left && count < size; i--){
              result += data[bottom][i] + " ";
              count++;
         }
         bottom--;
         for (var i = bottom; i >= top && count < size; i--){
              result += data[i][left] + " ";
              count++;
         }
         left++;
   }  
   return result.trim();
}


if (process.env.USER === "kishore") {
    runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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