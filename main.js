// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const likeHeart = document.querySelectorAll(".like-glyph");

for(const element of likeHeart){
  element.addEventListener('click', function(e){
    mimicServerCall()
    .then(() => {
      console.log(element.innerText)
      if (element.innerText === EMPTY_HEART)
      {
        element.innerText = FULL_HEART;
        element.classList.add('activated-heart');
      }
      else if (element.innerText === FULL_HEART)
      {
        element.innerText = EMPTY_HEART;
        element.classList.remove('activated-heart');
      }
    })
    .catch((error) => { 
      modal.classList.remove('hidden');
      setTimeout(modal.classList.add('hidden'), 5000);
    });
  })
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
