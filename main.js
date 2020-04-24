// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")
const allLikeGlyphs = document.querySelectorAll(".like-glyph")

allLikeGlyphs.forEach(function(likeGlyph) {
  likeGlyph.addEventListener("click", function() {
    mimicServerCall()
      .then(function(message) {
        console.log(message)
        if (likeGlyph.innerHTML == FULL_HEART) {
          likeGlyph.innerHTML = EMPTY_HEART
          likeGlyph.classList.remove("activated-heart")
        } else {
          likeGlyph.innerHTML = FULL_HEART
          likeGlyph.classList.add("activated-heart")
        }
      })
      .catch(function(error) {
        console.log(error.message);
        errorModal.classList.remove("hidden")
        setTimeout(function() {
          errorModal.classList.add("hidden")
        }, 5000)
    }) 
  })
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
