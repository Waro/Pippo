window.onload = function (){
    var cardValue = ["A","2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
    var suit = ["♥", "♦", "♣", "♠"]
    var rndcardValue = cardValue[Math.floor(Math.random() * cardValue.length)];
    var rdnSuit = suit[Math.floor(Math.random() * suit.length)];
    
    return rdnSuit, rndcardValue;
    
    document.queryselector(".seed").innerHTML= rdnSuit;
    document.queryselector(".cardnumber").innerHTML= rndcardValue;




}
    