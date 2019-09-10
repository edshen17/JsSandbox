// practice writing something like Java's Linked Lists in JS

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    // appends a value to the end of the linked list
    append(value) {
      const appendObj = new Node(value);
      this.tail.next = appendObj;
      this.tail = appendObj;
      this.length++;
    }
  
    // prepend a value to the front of the linked list
    prepend(value) {
      let prependObj = new Node(value);
      prependObj.next = this.head;
      this.head = prependObj;
      this.length++;
    }
  
    printList() {
      const arr = [];
      let currentNode = this.head;
      while(currentNode != null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
    }
  
  }
  
  const myLinkedList = new LinkedList(10);
  myLinkedList.prepend(1);
  myLinkedList.append(5);
  myLinkedList.append(16);
  console.log(myLinkedList);
  