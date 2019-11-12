/** Class representing a Stack. */

class Stack {

    constructor() {
      this._storage = {};
      this._length = 0;
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
        this._storage[this._length] = value;
        this._length++;
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
        if(this._length == 0){
            return undefined
        }
        else{
            delete this._storage[this._length - 1];
            this._length--;
        }   
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
        return this._storage[this._length -1];
  
    }
  }
  


/***********TESTING *************/

  const myStack = new Stack();

  myStack.push("one");
  myStack.push("two");
  myStack.push("three");
  
  console.log(myStack)
  //Stack{Storage:{0 : "one", 1 : "two", 2 : "three"} Length: 3}

  myStack.pop();

  console.log(myStack)
  //Stack{Storage:{0:"one", 1:"two"} Length: 2}

  console.log(myStack.peek());
  // return "two"

  myStack.pop();
  myStack.pop();
  //Stack{Storage:{} Length: 0}
  console.log(myStack.pop());
  // return undefined

