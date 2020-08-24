var n = document.querySelectorAll(".drum").length;

for(var i = 0; i<n; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    p = this.innerHTML;
    makeSound(p);
    buttonAnimation(p);
    });
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(p){
  switch(p){
    case 'w':
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;

    case 'a':
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;

    case 's':
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;

    case 'd':
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;

    case 'j':
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;

    case 'k':
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;

    case 'l':
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;

    default:
      console.log(p);
  }
}

function buttonAnimation(key){
  var buttonSelect = document.querySelector("." + key);
  buttonSelect.classList.add("pressed");
  setTimeout(function (){
    buttonSelect.classList.remove("pressed");
  }, 100);
}
