import ShoppingCart from './shopping-cart.mjs';


describe("Shopping Cart", function(){
    let cart;
    beforeEach(function(){
        cart = new ShoppingCart();
    })
    it("starts empty", function(){
        expect(cart.getItemCount()).toBe(0);
        expect(cart.total).toBe(0);
    });
});