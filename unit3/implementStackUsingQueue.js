/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/

class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        //this.Q2 = new Queue()
          //console.log(this.Q1);
    }
    push(value) {
    	//write your code here..
    this.Q1.queue.push(value);
    }
    pop() {
    	if(!this.isEmpty())
       this.Q1.queue.pop();
       else
       return false;
    }
    top() {
      return this.Q1.queue[this.Q1.queue.length-1];
        //write your code here..
      
    }
    isEmpty() {
       if(this.Q1.queue.length==0)
        return true;
        else
        return false;
    	//write your code here..
    }
}