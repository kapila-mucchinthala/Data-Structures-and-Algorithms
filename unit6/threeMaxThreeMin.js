function runProgram(input) {
    var newInput = input.split("\n");
    var N = +newInput[0];
    var arr = newInput[1].split(" ").map(Number);

    var obj={};
    for(let i=0;i<N;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1;
        }
        else {
            obj[arr[i]]=obj[arr[i]]+1;
        }
    }
  var str = [];
  console.log(obj);
  for (i in obj) {
    str.push(i);
  }
  str = str.sort((a, b) => {
    return a - b;
  })
    console.log(str);
    var str1 ='';
    var str2 = '';
    if(str.length>=3){
        for(let i=0;i<3;i++){
            str1 += str[i]+" ";
        }
        for (let i = str.length-1-2; i < str.length; i++){
            str2 += str[i]+" ";
        }
        // str1 += str[0] + str[1] + str[2];
        // str2 += str[str.length-1-2] + str[str.length-1-1] + str[str.length - 1-0];
        console.log(str1);
        console.log(str2);
    }
    else{
        console.log("Not Possible");
        console.log("Not Possible");
    }
}
if (process.env.USER === "kishore") {
  runProgram(`10
-4 -7 -2 -11 -2 -8 0 -122 -66 10`);
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