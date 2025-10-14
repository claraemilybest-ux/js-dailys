class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            throw new Error('Empty')
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            throw new Error('Empty')
        }
        return this.items[this.items.length -1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
}

class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            throw new Error('Empty')
        }
        return this.items.shift();
    }
    peek(){
        if(this.isEmpty()){
            throw new Error('Empty')
        }
        return this.items[0];

    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        const nodeToAdd = new Node(data);
        if(!this.root){
            this.root = nodeToAdd;
            return;
        }
        let pointer = this.root;
        while (pointer){
            if(data < pointer.data) {
                if(!pointer.leftChild){
                    pointer.leftChild = data;
                    break;
                }
                pointer = pointer.leftChild;
            //right
            } else {
                if(!pointer.rightChild){
                    pointer.rightChild = data;
                    break;
                }
                pointer.rightChild = data;
            }
        }
    }
    search(data){
        let pointer = this.root;
        while(pointer) {
            if(pointer.data === data) return pointer;
            pointer = data < pointer.data ? pointer.leftChild : pointer.rightChild;
        }
    }
    inOrderTraversal(){
        function traverse(node) {
            if (!node) return;
            traverse(node.leftChild);
            console.log(node.data);
            traverse(node.rightChild);
        }
        traverse(this.root);
    }
    preOrderTraversal(){
        function traverse(node) {
            if (!node) return;
            console.log(node.data);
            traverse(node.leftChild);
            traverse(node.rightChild);
        }
        traverse(this.root);
    }
    postOrderTraversal(){
        function traverse(node) {
            if (!node) return;
            traverse(node.leftChild);
            traverse(node.rightChild);
            console.log(node.data);
        }
        traverse(this.root);
    }
}