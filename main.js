// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMsg = document.querySelector("#modal")
errorMsg.style.display = "none";

let hearts = document.querySelectorAll(".like-glyph");


hearts.forEach(like => { 
  if (like.innerText === EMPTY_HEART) {
    like.addEventListener("click", (event)=>{
      mimicServerCall().then((response)=>{
        event.srcElement.innerText = FULL_HEART
        event.srcElement.classList.add("activated-heart")
      }).catch((err)=> {
        errorMsg.style.display = "block";
        setTimeout(()=>{ errorMsg.style.display = "none"}, 5000);
      })
    })
  } else if(like.innerText === FULL_HEART) {
    console.log("test")
    like.addEventListener("click", (event)=> {
      event.srcElement.innerText = EMPTY_HEART;
    })
  }})





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
