class ShoppingCart {
    constructor(){
        this.items = [];
        this.total = 0;
    }
    getItemCount(){
        return this.items.length;
    }
}

export default ShoppingCart;