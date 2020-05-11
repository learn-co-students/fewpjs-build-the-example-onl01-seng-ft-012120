// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errMsg = document.querySelector("#modal")
errMsg.classList.add("hidden");

let hearts = document.querySelectorAll(".like-glyph")

hearts.forEach(like =>{
  if (like.innerText == EMPTY_HEART){
    like.addEventListener("click", (event) => {
      mimicServerCall().then((response) => {
        if (like.innerText == EMPTY_HEART){
        event.target.innerText = FULL_HEART
        event.target.classList.add("activated_heart")
        }else {
          event.target.innerText = EMPTY_HEART
      event.target.classList.remove("activated_heart")
        }
      })
      .catch((err)=> {
        errMsg.style.display = "block"
        setTimeout(() => {errMsg.style.display = "none"}, 5000)
      })
    })
    

  }
})





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
