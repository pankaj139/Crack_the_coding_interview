/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list
*/
const LinkedList = require('./LinkedList')

function returnKthToLast(list,k){
    let cur = list.head;
    for(let i = 0 ; i < k ; i++){
        if(cur.next){
            cur = cur.next;
        }
        else{
            return null;
        }
    }
    let runner = list.head;
    while(cur){
        runner = runner.next;
        cur = cur.next;
    }
    return runner;
}

function returnKthToLastRecursive(head,k){
    cur = head;
    if(cur == null){
        return 0;
    }
    let index = returnKthToLastRecursive(head.next,k)+1;
    if(index == k){
        console.log(head.value);
    }
    return index;


}

const list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
    list.append(elem);
  }
console.log(returnKthToLast(list,7));
returnKthToLastRecursive(list.head,7);