class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}
 
function newNode(key) {
    temp = new Node();
    temp.data = key;
    temp.next = null;
    return temp;
}
 
function printList(node) {
    while (node != null) {
        console.log(node.data+" ");
        node = node.next;
    }
}
 
function merge(h1, h2) {
    if (h1 == null) {
        return h2;
    }
    if (h2 == null) {
        return h1;
    }
    if (h1.data < h2.data) {
        h1.next = merge(h1.next, h2);
        return h1;
    } else {
        h2.next = merge(h1, h2.next);
        return h2;
    }
}
 
linkedlist1 = newNode(1);
linkedlist1.next = newNode(3);
linkedlist1.next.next = newNode(5);
console.log("Linked List 1 :-")
printList(linkedlist1);
 
linkedlist2 = newNode(0);
linkedlist2.next = newNode(2);
linkedlist2.next.next = newNode(4);
console.log("Linked List 2 :-")
printList(linkedlist2);
 
mergedLinkedList = merge(linkedlist1, linkedlist2);
console.log("Merged and Sorted Linked List :-")
printList(mergedLinkedList);