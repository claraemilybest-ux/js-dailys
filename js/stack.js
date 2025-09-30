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
