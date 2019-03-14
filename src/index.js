// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let rez = {};
    if(currency==0){
return rez;
    }
    if(currency>10000){
        rez.error="You are rich, my friend! We don't have so much coins for exchange";
return rez;
    }

if(currency>=50){
    rez.H=Math.floor(currency/50);
    currency=currency-rez.H*50;
}
if(currency>=25){
    rez.Q=Math.floor(currency/25);
    currency=currency-rez.Q*25;
}
if(currency>=10){
    rez.D=Math.floor(currency/10);
    currency=currency-rez.D*10;
}
if(currency>=5){
    rez.N=Math.floor(currency/5);
    currency=currency-rez.N*5;
}
if(currency>=1){
    rez.P=Math.floor(currency/1);
  }
  return rez;
}