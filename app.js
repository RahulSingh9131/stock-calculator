const initialPrice=document.querySelector("#initial-price");
const stockQuantity=document.querySelector("#stock-quantity");
const currentPrice=document.querySelector("#current-price");
const button=document.querySelector("#btn");
const outputMessage=document.querySelector(".output");

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss=(initial-current)*quantity;
        var lossPercent=(loss/initial)*100;
        // console.log(`the loss ocurred is ${loss} and loss percentage is: ${lossPercent}%`);
        outputMessage.innerText="the loss occurred is: "+loss+" and the percentage is:"+lossPercent.toFixed(2)+"%";
        outputMessage.style.color="red";
    }else if(current>initial){
        var profit=(current-initial)*quantity;
        var profitPercent=(profit/initial)*100;
        outputMessage.innerText="the profit gained is: "+profit+" and the percentage is:"+profitPercent.toFixed(2)+"%";
        outputMessage.style.color="green";
    }else{
        outputMessage.innerText="NO profit NO gain";
    }
}

function clickListener(){
    var ip=Number(initialPrice.value);
    var qty=Number(stockQuantity.value);
    var curr=Number(currentPrice.value);
    if(ip&&qty&&curr){
        if(ip>0&&qty>0&&curr>0){
            calculateProfitAndLoss(ip,qty,curr);
        }else{
            outputMessage.innerText="values entered should be greater than zero";
        }   
    }else{
        outputMessage.innerText="Please enter all the fields";
    }
   
}

button.addEventListener("click",clickListener);