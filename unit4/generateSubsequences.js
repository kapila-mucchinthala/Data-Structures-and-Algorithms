function runProgram(input) {
  var newInput = input.split("\n");
  var data = newInput[1].split("");
  subsequence("",data,0,data.length-1)
  }

function subsequence(res,A,l,h)
{
  if(l<=h+1 && res!="")
  {
    console.log(res);
  }
  for(var i = l; i<=h; i++)
  {
    subsequence(res+A[i],A,i+1,h)
    }
}

if (process.env.USER === "kishore") {
    runProgram(`4
abcd`);
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