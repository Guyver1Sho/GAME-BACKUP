//IMAGE FADE///
/*------------------------------------*/
const Blackbox = document.querySelector(".Blackbox");

var playing = false;

const tl = new TimelineMax({onComplete: function(){ playing = false;} });

tl.fromTo(Blackbox, 0, {opacity: 0}, {opacity: 1, ease: Power1.easeInOut}) 
.fromTo(Blackbox, 1, {opacity: 1},  {opacity: 0, ease: Power1.easeInOut});



document.getElementById('option-buttons').addEventListener("click", playTL );

function playTL(){
    if( !playing ){
      playing = true;
      tl.progress(0).play();
    }
  }

/*------------------------------------*/