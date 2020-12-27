let counter = parseInt(document.getElementById('counter').innerText)
let content = document.getElementById('counter')
let interval

function counterOnLoad(){
  let interval = setInterval(addCounter , 1000)
}

function addCounter(){
  content.innerText = counter++
}

function incrementManually(plus){
  plus.addEventListener("click",() => {
    content.innerText = counter++
  })
}
function decrementManually(minus){
  minus.addEventListener("click",() => {
    content.innerText = counter--
  })
}
function like(heart,list) {
  let k = 0
  heart.addEventListener("click",() => {
    k++
    let li = document.createElement("li")
    li.innerText = `like = ${k}`
    if(list){
      list.appendChild(li)
    }
  })
  // return list
}
function pauseFun(pause){
  pause.addEventListener("click", () => {
    clearInterval(interval)
  })
}
function leaveComment(form,comment,contentAppear){
  form.addEventListener("submit",(e) => {
    e.preventDefault()
    setTimeout(() => {
      contentAppear.innerHTML += comment.value + "<br>"
    },1000)
  })
}

document.addEventListener("DOMContentLoaded",() => {
  counterOnLoad()
  let plus = document.getElementById('plus')
  let minus = document.getElementById('minus')
  let heart = document.getElementById('heart')
  let pause = document.getElementById('pause')
  let likes = document.getElementById('likes')
  let form = document.getElementById('comment-form')
  let comment = document.getElementById('comment-input')
  let listComment = document.getElementById('list')

  incrementManually(plus)
  decrementManually(minus)
  like(heart,likes)
  pauseFun(pause)
  leaveComment(form,comment,listComment)
})
