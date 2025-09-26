import Auction from "./Auction";
//set input vars from their element id
const bidder = document.getElementById("bidder-name");
const amount = document.getElementById("bid-amount");
const placeBidBtn = document.getElementById("place-bid");
const clearBidBtn = document.getElementById("clear-bid");
//set up the auction
const auctionItem = new Auction("Cookie");
//create place for highest bid to display
const highestPlace = document.createElement('p');
document.getElementById('bid-topspot').appendChild(highestPlace);
//put preverse highest bid up
auctionItem.highestBid(highestPlace);

//when bid button pressed
placeBidBtn.addEventListener("click", () => {
    //sanitize bidder and amount
    const bidderName = bidder.value.trim();
    const bidAmount = parseFloat(amount.value);
    //make sure inputs are valid
    if (!bidAmount ||!bidderName || isNaN(bidAmount) || bidAmount <= 0 ){
        alert("Please enter a vaild name/amount")
        return;
    };
    //call placeBid function
    auctionItem.placeBid(bidderName, bidAmount);
    auctionItem.highestBid(highestPlace);
    //empty text feilds 
    bidder.value = '';
    amount.value = '';
});

//when clear bids button is pressed
clearBidBtn.addEventListener("click", () => {
    //call clearBid function
    auctionItem.clearBid();

});

