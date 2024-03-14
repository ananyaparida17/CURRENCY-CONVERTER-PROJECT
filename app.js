const BASE_url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json`;

const dropdowns=document.querySelectorAll(".dropdowns select");

const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


for(let select of  dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);

    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}
const updateFlag=(element)=>{
    let currCode =element.value;
    let countryCode=countryList(currCode);
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;

}
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    const updateExchange= async ()=>{
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    console.log(amtval);
    if(amtval===""||amtval<1){
        amtval=1;
        amount.value="1";
    }}})


    const url=`${BASE_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(url);
    let data=await response.json();
    let rate=data(toCurr.toLowerCase());
    console.log(rate);
    let finalAmount=amtval*rate;
    console.log(rate);
    console.log(amount);
    msg.innerText=`${amtval} ${fromCurr.value}=${finalAmount} ${toCurr.value}`;




