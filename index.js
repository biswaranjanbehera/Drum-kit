//lecture number 138 addEventListener

// document.querySelector("button").addEventListener("click",handleclick);// here it will handle only one button
//document.querySelector("button").addEventListener("click",function (){
//  alert("I clicked");
//}); this will give same outpit of the above the anonymous function

// Here it will work for all the button
//document.querySelectorAll("button")[0].addEventListener("click",handleclick);
//document.querySelectorAll("button")[1].addEventListener("click",handleclick);
//document.querySelectorAll("button")[2].addEventListener("click",handleclick);
//document.querySelectorAll("button")[3].addEventListener("click",handleclick);
//document.querySelectorAll("button")[4].addEventListener("click",handleclick);
//document.querySelectorAll("button")[5].addEventListener("click",handleclick);
//document.querySelectorAll("button")[6].addEventListener("click",handleclick);

// but we can do all the button using loop

// this code for mouse click button

var numberofdrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
      {
          var buttoninnerhtml=this.innerHTML;
          makesound(buttoninnerhtml);
          buttonanimation(buttoninnerhtml);
      });
}

// this code for keyboard press

document.addEventListener("keypress",function(event){
//  console.log(event);
var p=event.key;
  makesound(p);
  buttonanimation(p);
})

// for making sound function
function makesound(key)
{
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
       break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;

      default:
        console.log(buttoninnerhtml);

    };
}

function buttonanimation(currentkey)
{
    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);

}
// function handle_audioto_all_drum(){

// this.style.color="white";
// var audio=new Audio("sounds/tom-3.mp3");
// audio.play();
//alert("I clicked");
//lecture 138 end
