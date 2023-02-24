/*
Partition: write code to partition a linked list around a value x, such that all node less than x come before all nodes
greater than or equal to x. If x is contained within the list, the value of x only need to be after the element less than x
(see below). The partition element x can appear anywhere in the right partition; it does not need to appear between the left 
and right partitions. 
Example:
input: 3->5->8->5->10->2->1 [Patition = 5]
output: 3->1->2->10->5->5->8 
*/

const LinkedList = require('./LinkedList')

function partition(list, partition) {
    
}


const list = new LinkedList();
for (let elem of [3,5,8,5,10,2,1]) {
    list.append(elem);
}