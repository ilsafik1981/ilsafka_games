let audio = document.querySelector('.audio'),
    butS = document.querySelector('.logo')

butS.addEventListener('click', e => {
  butS.classList.toggle('paused')
 if(audio.paused){
  audio.play()
}
else{
  audio.pause()
}

})
    
