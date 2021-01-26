let counter = 0;
let counterLoad = document.getElementById("counter")
let intervalID = window.setInterval(count, 1000);
function count()
{
  counter++;
  counterLoad.innerText = counter;
}
document.getElementById("plus").addEventListener("click",function() {
  counter++;
  counterLoad.innerText = counter;
 }
);
document.getElementById("minus").addEventListener("click", function() {
  counter--;
  counterLoad.innerText = counter;
 }
);

let pauseBtn = documentgetElementById("pause")
  pauseBtn.addEventListener("click",function () {
    if(pauseBtn.innerText === "pause"){
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("heart").disabled = true;
    pauseBtn.innerText="resume";
    clearInterval(intervalID);}
  else{
    intervalID = window.setInterval(count, 1000);
    document.getElementById("minus").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("heart").disabled = false;
    pauseBtn.innerText="pause";
  }
});
  document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault()
    let inputText=document.getElementById("comment-input");
    if(inputText.value===""){
    alert("enter a comment") }
    else{ pCmt= document.createElement("p");
    pCmt.innerText = inputText.value;
    document.getElementsByClassName("comments").appendChild(pCmt);}
  });
