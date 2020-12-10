let counter=0;
let countershow= document.querySelector("#counter");


let intervalID = window.setInterval(count, 1000);

function count()
{
  counter++;
  countershow.innerText= counter;
}

document.querySelector("#plus").addEventListener("click",function () {
    counter++;
    countershow.innerText= counter;
}
  );
  
  document.querySelector("#minus").addEventListener("click",function () {
    counter--;
    countershow.innerText= counter;
}
  );
  
  let pauseBtn=document.querySelector("#pause")
  pauseBtn.addEventListener("click",function () {
    if(pauseBtn.innerText=="pause"){
    document.querySelector("#minus").disabled = true;
    document.querySelector("#plus").disabled = true;
    document.querySelector("#heart").disabled = true;
    pauseBtn.innerText="resume";
    clearInterval(intervalID);}
  else{
    intervalID = window.setInterval(count, 1000);
    document.querySelector("#minus").disabled = false;
    document.querySelector("#plus").disabled = false;
    document.querySelector("#heart").disabled = false;
    pauseBtn.innerText="pause";
  }
});
  document.querySelector("#submit").addEventListener("click",function(event){
    event.preventDefault()
    let inputTxt=document.querySelector("#comment-input");
    if(inputTxt.value===""){
    alert("enter a comment") }
    else{ pCmt= document.createElement("p");
    pCmt.innerText=inputTxt.value;
    document.querySelector(".comments").appendChild(pCmt);}
  });
  
   document.querySelector("#heart").addEventListener("click",function () {
  let list =document.querySelector(".likes");
   let listItem = document.createElement("li");
   listItem.innerText=`❤️ this count ${counter}`
  list.appendChild(listItem);
});
  