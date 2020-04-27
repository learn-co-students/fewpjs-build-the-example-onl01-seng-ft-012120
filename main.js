// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
const error = document.getElementById("modal-message");

const likes = document.getElementsByClassName("like");

for (let x = 0; x < likes.length; x++) {
  likes[x].addEventListener("click", (addHeart) => {

  mimicServerCall()
    .then(results => {
      if (!addHeart.target.classList.contains("activated-heart")) {
        console.log("yes");
        addHeart.target.innerText = FULL_HEART;
        addHeart.target.classList.add("activated-heart");
      } else {
        addHeart.target.innerText = EMPTY_HEART;
        addHeart.target.classList.remove("activated-heart");
      }
    })
    .catch(err => {
      modal.classList.remove("hidden");
      error.innerText = (err);
      setTimeout(function() {
        modal.classList.add("hidden");
      }, 5000);
    });
  });
}


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
