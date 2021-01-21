let submitBtn=document.getElementById("submit");
let counter=document.getElementById("counter");
let pauseBtn=document.getElementById("pause");
let minusBtn=document.getElementById("minus");
let plusBtn=document.getElementById("plus");
let heartBtn=document.getElementById("heart");
let likedList = document.getElementById("likes");
let result=0;
let internalId;


//submit button

submitBtn.addEventListener("click", function(){
  listComment.innerText=inputComment.value;
});


//counter
function counterIncrement () {
counter.innerText= result++;
}
internalId=setInterval(counterIncrement, 1000);


//pause button

pauseButton.addEventListener("click", function(){
if(pauseBtn.innerText=="pause"){
clearTimeout(internalId);
minusBtn.disabled = true;
plusBtn.disabled = true;
heartBtn.disabled = true;
pauseBtn.innerText="resume";
}else{
minusBtn.disabled = false;
plusBtn.disabled = false;
heartBtn.disabled = false;
pauseBtn.innerText="pause";
internalId=setInterval(counterIncrement, 1000);
}
});

//plus and minus button

plusBtn.addEventListener("click", function(){
 clearTimeout(internalId);
 result++;
internalId=setInterval(counterIncrement, 1000);
});

minusBtn.addEventListener("click", function(){
 clearTimeout(internalId);
 result--;
internalId=setInterval(counterIncrement, 1000);
});

//heart button

heartBtn.addEventListener("click", function(){
  clearTimeout(internalId);
  likedList.innerHTML += "<li>"+ counter.innerText +"</li>"
  internalId=setInterval(counterIncrement, 1000);
});
