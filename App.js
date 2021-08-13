var buyingPrice = document.querySelector("#buying-price");
var stockVolume = document.querySelector("#stock-volume");
var sellingPrice = document.querySelector("#selling-price");
var checkBtn = document.querySelector("#check-btn");
var result  = document.querySelector("#result");
var inputDiv = document.querySelector("#input-div");

checkBtn.addEventListener('click',clickHandler);

function clickHandler(){
  if(Number(buyingPrice.value) != 0 && ( Number(stockVolume.value) != 0 &&  Number(sellingPrice.value) != 0)){
    var totalBuyingPrice = Number(buyingPrice.value) * Number(stockVolume.value);
     var totalSellingPrice = Number(sellingPrice.value) * Number(stockVolume.value);
     if(totalBuyingPrice < totalSellingPrice){
         var profit = totalSellingPrice - totalBuyingPrice ;
        var profitPercent = (profit / totalBuyingPrice) * 100 ;
         result.innerText = "Hey! this trade was profitable. You earned " + profitPercent + "% profit. Which is total Rs. " + profit + "." 
         if(profit > 50){
           inputDiv.style.backgroundColor = "rgba(240,255,255,0.3)"
         }  
     }
     else{
         var loss = totalBuyingPrice - totalSellingPrice;
         var lossPercent = ( loss/totalBuyingPrice)*100;
         result.innerText = "Hey! this trade was not profitable."
        + " And you lost " + lossPercent + "% . Which is total Rs. " + loss + "." 
         if(lossPercent > 50){
            inputDiv.style.backgroundColor = "rgba(127,255,212,0.3)"
         }
     }
    }
 else{
     result.innerText = "Bhai bina input k kuch nhi hoga"
 }
}



