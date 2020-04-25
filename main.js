// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// add .hidden class to the error modal in the HTML so it does not appear when the page first loads

let modal = document.getElementById("modal")
modal.className = "hidden"

//When a user clicks on an empty heart ("Recognizing events")
//Invoke mimicServerCall to simulate making a server request
//mimicServerCall randomly fails to simulate faulty network conditions
let likeButtons = document.querySelectorAll("li.like")
likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', function() {
    mimicServerCall(url="http://mimicServer.example.com", config={})
    .then(function(response) {
      return response;
    })
    .then(function(json) {
      let heart = likeButton.querySelector("span")
      if (heart.innerHTML === FULL_HEART) {
        heart.innerHTML = EMPTY_HEART
        heart.className = ""

      } else if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.className = "activated-heart"
      }
    })
    .catch(function(error) {
      modal.className = ""
      modal.innerText = `ERROR: ${error.message}`
      setTimeout(function(){ modal.className = "hidden" }, 5000);
    });
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
