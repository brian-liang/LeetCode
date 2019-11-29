/*
Write a function to check that a binary tree ↴ is a valid binary search tree. ↴ 
*/

class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }

  function isBinarySearchTree(treeRoot){
      const nodeAndBoundsStack = [];
      nodeAndBoundsStack.push({
          node: treeRoot,
          lowerBound: Number.NEGATIVE_INFINITY,
          uppderBound: Number.POSITIVE_INFINITY,
      });

      //Depth-first traversal
      while(nodeAndBoundsStack.length){
          const{ node, lowerBound, uppderBound } = nodeAndBoundsStack.pop();

          if(node.value <= lowerBound || node.value >= uppderBound){
              return false;
          }

          if(node.left){
              nodeAndBoundsStack.push({
                  node: node.left,
                  lowerBound,
                  uppderBound: node.value,
              });
          }
          
          if(node.right){
              nodeAndBoundsStack.push({
                 node: node.right,
                 lowerBound: node.value,
                 uppderBound, 
              });
          }
      }

      return true;

    
  }

