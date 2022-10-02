// MAke the Function to play Sound and class
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const divAudio = document.querySelector(`div[data-key="${e.keyCode}"]`);
  //   console.log(divAudio);
  if (!audio) return;
  divAudio.classList.add("playing");
  audio.currentTime=0;
  audio.play();
    // getClass()
  setTimeout(() => {
    divAudio.classList.remove("playing");
  }, 100);
}
// 
function removeClass(e){
    // we get different propertyName where we add the transform
    if(e.propertyName !== 'transform')return;
    console.log(this);
    this.classList.remove("playing")
}
const keys=Array.from(document.querySelectorAll(".key"));
keys.forEach(value => value.addEventListener('transitionend',removeClass));

window.addEventListener("keydown", playSound);
