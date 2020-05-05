// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let error = document.getElementById("modal")
error.setAttribute("class", "hidden")

document.querySelectorAll("ul").forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.currentTarget.innerText == `Like! ${EMPTY_HEART}`) {
    e.currentTarget.innerHTML =  `<li class="like">Like! <span class="like-glyph">${FULL_HEART}</span></li>`
  } else {
    e.currentTarget.innerHTML = `<li class="like">Like! <span class="like-glyph">${EMPTY_HEART}</span></li>`
  }
  console.log(e.currentTarget)
  
  
});
});


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
