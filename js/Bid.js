class Bid{
    //make bid
    constructor(bidder, amount){
        //make inputs into vars and make sure there are no symbols in bidder name
        this.bidder = bidder.replace(/[^a-zA-Z0-9]/g, '').trim();
        this.amount = amount;
    }
    
}

//make it so the class can be use some where else
export default Bid;