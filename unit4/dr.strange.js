function subSequence(ans,A,l,h){
	if(l<=h+1 && ans!=''){
    	console.log(ans);
    }
    	for(var i =l;i<=h;i++){
        	subSequence(ans+A[i]+' ',A,i+1,h)
        
    }
}


function runProgram(input){
	 var a = input;
    var A=[];
    for(var i =1;i<=a;i++){
    	A.push(i);
    }
    A=A.map(String)
    
    console.log('')
    subSequence('',A,0,a-1)
}

if (process.env.USER === "kishore") {
    runProgram(`3`);
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