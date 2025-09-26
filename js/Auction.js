//makes it able to use Bid class
import Bid from "./Bid.js";

class Auction{  
    constructor(item){
        this.item = item;
        //get bids from local storage
        const savedBids = localStorage.getItem(`${this.item.replace(/\s+/g, "-").toLowerCase()}-bids`);
        //if there are bids put each of them in bid class
        //if there aren't any bids create a empty array
        this.bids = savedBids ? JSON.parse(savedBids).map((bid) => new Bid(bid.bidder, bid.amount)) : [];
        //add any bids to the bid list
        this.bids.forEach(bid => {
            const bidList = document.createElement('li');
            bidList.innerHTML = `${bid.bidder} bidded $${bid.amount}`;
            document.getElementById('bid-list').appendChild(bidList);
        });
    }
    //creates bid
    placeBid(bidder, amount){
        //make new bid with Bid class
        const bid = new Bid(bidder, amount);
        //add bid to the list
        this.bids.push(bid);
        //add bid to local storage
        localStorage.setItem(
            `${this.item.replace(/\s+/g, "-").toLowerCase()}-bids`,
            JSON.stringify(this.bids)
        );
        //add it to the bid list that is displayed
        const bidList = document.createElement('li');
        bidList.innerHTML = `${bidder} bidded $${amount}`;
        document.getElementById('bid-list').appendChild(bidList);

    }
    highestBid(highestPlace){
        //if there aren't any bids don't do anything
        if (this.bids.length === 0) return null;
        //figure out which bid is the highest
        const highest = this.bids.reduce((max, bid) => bid.amount > max.amount ? bid : max);
        //display the highest bid
        highestPlace.innerHTML = `${highest.bidder} with $${highest.amount}`;
        //return highest
        return highest;
    }
    clearBid(){
        //empty the displayed bid list
        document.getElementById('bid-list').innerHTML = ``;
        //set bids array to empty
        this.bids = [];
        //update local storage to be empty
        localStorage.setItem(
            `${this.item.replace(/\s+/g, "-").toLowerCase()}-bids`,
            JSON.stringify(this.bids)
        );
    }
}
export default Auction;