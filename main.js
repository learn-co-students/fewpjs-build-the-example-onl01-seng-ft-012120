// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.querySelector('#modal');
let articles = document.querySelectorAll('article');
let likes = document.getElementsByClassName('like');
let hearts = document.querySelectorAll('.like-glyph');
let modalMessage = document.querySelector('#modal-message');
let activatedHearts = document.querySelectorAll('.activated-heart');

// Your JavaScript code goes here!
modal.hidden = true;



// function changeLikeItemToButton() {
//   for (i=0; i < likes.length; i++) {
//     button = document.createElement('button');
//   }

// }

function likeElement() {
  for (i=0; i < likes.length; i++) {
    let like = likes[i];
    let span = like.querySelector('span');
    span.addEventListener("click", function(e) {
      heart = e.target;

      if (heart.innerHTML == EMPTY_HEART) {
        mimicServerCall().then (function(response){

          heart.innerHTML = `${FULL_HEART}`;
          heart.class = "activated-heart";
          heart.style.color = 'red';
        //   return response;
        // }).then (function(object){
        //   console.log(object);
        }).catch (function(error){
          modalMessage.innerHTML = error;
          setTimeout(displayError, 3000);
          
        // })
        // heart.innerHTML = `${FULL_HEART}`;
        // heart.class = "activated-heart";
      });
     } else {
        heart.innerHTML = `${EMPTY_HEART}`;
        heart.class = "like-glyph";
        heart.style.color = "";
      }
    })
  }
};
likeElement();

// function redHeart() {
//   if (activatedHearts.length > 0) {
//     activatedHearts.innerHTML.style.color = 'red';
//   }

// };
// redHeart();

// mimicServerCall().then (function(response){
//   return response;
// }).then (function(object){
//   console.log(object);
// }).catch (function(error){
//   modal.hidden = false; 
//   modalMessage.innerHTML = error.message;
//   setTimeout(displayError(), 3000);
// })

function displayError() {
  modal.hidden = false;
  // modalMessage.innerHTML = error;
  // console.log(error);
};

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
