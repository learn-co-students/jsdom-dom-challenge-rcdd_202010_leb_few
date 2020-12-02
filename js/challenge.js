 document.addEventListener("DOMContentLoaded",()=>{
  let counter=document.getElementById("counter");
  let i=0;
  let interval = setInterval(function(){counter.innerText=`${i}`; i++;}, 1000);
  document.getElementById("plus").addEventListener("click",   function(){i++;});
  document.getElementById("minus").addEventListener("click",  function(){i=i-1;});
    let time= [];
    let l=0;
  document.getElementById("heart").addEventListener("click",  function(){
    let list = document.querySelector(".likes");  
    time.push(counter.innerText);   
    list.innerHTML+="<li>"+time[l]+" has been liked 1 time </li>";
     l++;
    })
  document.getElementById("pause").addEventListener("click",  function(){
    time1=counter.innerText;
    document.getElementById("pause").innerText="resume";
    document.getElementById("pause").setAttribute("id","resume");
    document.getElementById("plus").disabled=true;
    document.getElementById("minus").disabled=true;
    document.getElementById("heart").disabled=true;
    document.getElementById("submit").disabled=true;clearInterval(interval);

    document.getElementById("resume").addEventListener("click",  function(){
      i=time1;
    setInterval(function(){counter.innerText=`${i}`;i++;}, 1000);
    
    document.getElementById("resume").innerText="pause";
    document.getElementById("resume").setAttribute("id","pause");
    document.getElementById("plus").disabled=false;
    document.getElementById("minus").disabled=false;
    document.getElementById("heart").disabled=false;
    document.getElementById("submit").disabled=false;
    })
   })
    
  document.getElementById("submit").addEventListener("click",function(){
    event.preventDefault();
   let value =document.getElementById("comment-input").value;
   document.getElementById("list").innerHTML+=value+"<br>";
  })
}
);