
let title = document.getElementById("title");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let button = document.getElementById("button");


let changed = false;


button.onclick = function () {

  title.classList.remove("fade");
  text1.classList.remove("fade");
  text2.classList.remove("fade");

  void title.offsetWidth;

  title.classList.add("fade");
  text1.classList.add("fade");
  text2.classList.add("fade");

  if (changed === false) {
    title.textContent = "second page";
    text1.textContent = "the change are going good";
    text2.textContent = "good job 🚀";
    button.textContent = "go back";
    changed = true;
  } else {
    title.textContent = "Welcome to my first site";
    text1.textContent = "That was good 😎";
    text2.textContent = "This is my first site";
    button.textContent = "Click Here";
    changed = false;
  }
};


