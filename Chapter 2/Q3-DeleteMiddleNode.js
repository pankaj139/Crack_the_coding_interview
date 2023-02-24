/*
Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not
    necessarily the exact middle) of the singly linked list. given only acess to that node.
    EXAMPLE: 
    Input: the node c from the linked list a->b->c->d->e->f
    Result : nothing is returned, but the new linked list looks like a->b->d->e->f
*/
const LinkedList = require('./LinkedList')

function deleteMiddleNode(list){
    let cur = list.head;
    let runner = list.head;
    while(cur && cur.next){
        cur = cur.next.next;
        prev = runner;
        runner = runner.next;
    }
    prev.next = prev.next.next;
    return list;
}



const list = new LinkedList();
for (let elem of ['a', 'b', 'c', 'd', 'e', 'f']) {
    list.append(elem);
}
deleteMiddleNode(list).print();
