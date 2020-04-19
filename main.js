// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function addLikeCallback(e){
  let heart = e.target;
  const errorModal = document.getElementById('modal');
  console.log("Liked!");
  mimicServerCall()
    .then(function(serverMessage){
      console.log(serverMessage)
      heart.innerHTML = FULL_HEART;
      heart.style.color = 'red';
      errorModal.style.display = 'none';
    })
    .catch(function(error){
      console.log(error)
      errorModal.style.display = '';
    })
}

document.addEventListener('DOMContentLoaded', function(){  
  document.getElementById('modal').style.display = 'none';
  const likeBtns = document.querySelectorAll('span.like-glyph');
  for(const btn of likeBtns){
    btn.addEventListener('click', addLikeCallback);
  };
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
