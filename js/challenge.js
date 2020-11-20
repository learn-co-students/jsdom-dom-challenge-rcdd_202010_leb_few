let subButton=document.getElementById("submit");
let listComment=document.getElementById("list");
let inputComment=document.getElementById("comment-input");
let counter=document.getElementById("counter");
let pauseButton=document.getElementById("pause");
let minusButton=document.getElementById("minus");
let plusButton=document.getElementById("plus");
let heartButton=document.getElementById("heart");
let liketList = document.getElementById("likes");
let result=0;
let internalId;


//submit button//
subButton.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});


//counter//
function counterIncrement () {
counter.innerText= result++;
}
internalId=setInterval(counterIncrement, 1000);


//pause button//
pauseButton.addEventListener("click", function(){
if(pauseButton.innerText=="pause"){
clearTimeout(internalId);
minusButton.disabled = true;
plusButton.disabled = true;
heartButton.disabled = true;
pauseButton.innerText="resume";
}else{
minusButton.disabled = false;
plusButton.disabled = false;
heartButton.disabled = false;
pauseButton.innerText="pause";
internalId=setInterval(counterIncrement, 1000);
}
});

//plus and minus button//
plusButton.addEventListener("click", function(){
 clearTimeout(internalId);
 result++;
internalId=setInterval(counterIncrement, 1000);
});

minusButton.addEventListener("click", function(){
 clearTimeout(internalId);
 result--;
internalId=setInterval(counterIncrement, 1000);
});

//heart button//
heartButton.addEventListener("click", function(){
  clearTimeout(internalId);
  liketList.innerHTML += "<li>"+ counter.innerText +"</li>"
  internalId=setInterval(counterIncrement, 1000);
});



