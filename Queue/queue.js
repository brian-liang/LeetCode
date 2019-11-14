/** Class representing a Queue. 
 * @constructor
*/

class Queue {

    constructor() {
      this._storage = {};
      this._head = 0;
      this._length = 0;
    }
    /*
    * Enqueues a new value at the end of the queue
    * @param {*} value the value to enqueue
    */
    enqueue(value) {
      this._storage[this._length + this._head] = value;
      this._length++;
    }
  
    /*
    * Dequeues the value from the beginning of the queue and returns it
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
      const returnVal = this.peek();
      delete this._storage[this._head];
      this._head++;
      this._length--;
      return returnVal;
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue
    * @return {*} the first and oldest value in the queue
    */
    peek() {
      return this._storage[this._head];
    }
  }

     /********Testing *********/
    //enqueue
  const myQueue = new Queue();
  myQueue.enqueue("one");// {_storage{0:"one"}, _head{0}, _length{1}}
  myQueue.enqueue("2"); // {_storage{0:"one", 1:"2"}, _head{0}, _length{2}}
  myQueue.enqueue("tres"); // {_storage{0:"one", 1:"2", 2:"tres"}, _head{0}, _length{3}}
  console.log(myQueue.dequeue()); //{_storage{1:"2", 2:"tres"}, _head{1}, _length{2}}     returns "one"
  myQueue.enqueue("4"); //{_storage{1:"2", 2:"tres", 3:"4"}, _head{1}, _length{3}} 
  console.log(myQueue); 
  console.log(myQueue.dequeue()); //{_storage{2:"tres", 3:"4"}, _head{2}, _length{2}}      returns "2" 
  console.log(myQueue);  //{_storage{2:"tres", 3:"4"}, _head{2}, _length{2}}  

  // //peak
  // console.log(myQueue.peek());  //return "one"

  // //dequeue
  // console.log(myQueue.dequeue()); //return "one"
  // console.log(myQueue); //{_storage{1:"2", 2:"tres"}, _head{1}}
  // console.log(myQueue.dequeue()); //return "2"
  // console.log(myQueue); //{_storage{2:"tres"}, _head{2}}