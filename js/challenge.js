//variables
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let counter = document.getElementById("counter");
let Heart = document.getElementById("heart");
let likesnum = document.getElementById("likes");
let commentForm = document.getElementById("comment-form");
let submit = document.getElementById("submit");
let pause = document.getElementById("pause");
let commentList = document.getElementById("somecomment");
let commentValue = document.getElementById("comment-input");

//display comment
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  commentList.innerHTML = `<li>${commentValue.value}</li>`;
});
let Likes = [(5)[2]];
//like
function like() {
  likesnum.innerHTML += `<li>I love Counting ${counter.innerText}</li>`;
}

//counter
let i = 0;
function Counting() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function increment() {
  clearTimeout(countIndex);
  counter.innerText = parseInt(counter.innerText) + 1;
}
let countIndex = setInterval(Counting, 1 * 1000);

minus.addEventListener("click", function () {
  counter.innerText = parseInt(counter.innerText) - 1;
});

plus.addEventListener("click", function () {
  counter.innerText = parseInt(counter.innerText) + 1;
});

pause.addEventListener("click", function () {
  if (pause.innerText === "pause") {
    clearTimeout(countIndex);
    pause.innerText = "resume";
  } else if (pause.innerText === "resume") {
    counter.innerText = parseInt(counter.innerText) + 1;
    pause.innerText = "pause";
  }
});
