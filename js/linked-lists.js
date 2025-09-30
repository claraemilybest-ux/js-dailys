class DoublyNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;

    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.current = null;
    }
    add(value){
        const newNode = new DoublyNode(value);
        if(!this.head){
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
        
    remove(value){
        if(!this.head) return;
        let current = this.head;

        while(current){
            if(current.value === value){
                if (current.prev) current.prev.next = current.next;
                else this.head = current.next;
                if (current.next) current.next.prev = current.prev;
                else this.tail = current.prev;
                return;
            }
            current = current.next
        }
        
    }
    moveNext(){
        if(!this.current) return;
        if(this.current.next){
            this.current = this.current.next;
        } else{
            this.current = this.head;
        }
    }
    movePrev(){
        if(!this.current) return;
        if(this.current.prev){
            this.current = this.current.prev;
        }else{
            this.current = this.tail;
        }
    }
    getCurrent(){
        if(!this.current) this.current = this.head;
        return this.current.value;
    }
    traverse(){
        let current = this.head;
        while(current){
            const parent = document.getElementById("song-list");
            let song = document.createElement('li');
            song.innerHTML = current.value;
            parent.appendChild(song);
            current = current.next;
        }
    }
}

export default DoublyLinkedList;