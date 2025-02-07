// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likeList = document.querySelectorAll(".like-glyph");

likeList.forEach((element) => {
  element.addEventListener("click", likeButton);
});

function likeButton(e) {
  const like = e.target;

  mimicServerCall()
    .then(() => {
      if (like.innerText == FULL_HEART) {
        like.innerText = EMPTY_HEART;
        like.classList.remove("activated-heart");
      } else {
        like.innerText = FULL_HEART;
        like.classList.add("activated-heart");
      }
    })
    .catch((err) => {
      document.querySelector("#modal").classList.remove("hidden");
      document.querySelector("#modal-message").textContent = err.message;
      setTimeout(addHidden(), 3000);
    });

  function addHidden() {
    const errorMessage = document.querySelector("#modal");
    errorMessage.classList.add("hidden");
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
