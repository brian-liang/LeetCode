/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //two pointers a runner and a delay
    var root = new ListNode(0);
    root.next = head;
    let slow = root;
    let runner = root;
    
    //runner starts
    for (let i=0; i<n; i++){
        runner = runner.next;
    }

    while(runner.next !== null){
        runner = runner.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return root.next;
};


