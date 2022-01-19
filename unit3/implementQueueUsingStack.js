/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
    constructor()
    {
        this.S1 = new Stack()
        //this.S2 = new Stack()
    }
    push(value) {
    	//write your code here..
      this.S1.stack.push(value);
    }
    pop() {
     	//write your code here..
      if(!this.isEmpty()){
      	this.S1.stack.shift();
      }else{
      	return false;
      }
    }
    front() {
    	//write your code here..
      return this.S1.stack[0];
    }
    isEmpty() {
    	//write your code here..
      if(this.S1.stack.length===0){
      	return true;
      }else{
      	return false;
      }
    }
}