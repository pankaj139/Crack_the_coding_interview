/*
Write code to remove duplicates from an unsorted linked list
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed.
*/

const LinkedList = require("./LinkedList");
function removeDuplicate(list){
    let set = new Set();
    let cur = list.head;
    let prev = null;
    while(cur){
        if(set.has(cur.value)){
            prev.next = cur.next;
        }
        else{
            set.add(cur.value);
            prev = cur;
        }
        cur = cur.next;   
    }
    return list;
}

function removeDuplicates(list){
    let cur = list.head;
    while(cur){

        let runner = cur;
        while(runner.next){
            if(runner.next.value == cur.value){
                runner.next = runner.next.next;
            }
            else{
                runner = runner.next;
            }
        }
        cur = cur.next
    }
    return list;

}
const list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
    list.append(elem);
  }
console.log(removeDuplicates(list).print())
