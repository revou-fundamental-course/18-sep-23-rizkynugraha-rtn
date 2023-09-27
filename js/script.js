//slider//
const carouselSlide = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 3000;

function nextSlides() {
  carouselSlide[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselSlide.length;
  carouselSlide[currentIndex].classList.add("active");
  carouselSlide[currentIndex].classList.add("fade-in");
}

(function () {
  setInterval(nextSlides, interval);
})();

//validasi//
document.getElementById("btn-submit").addEventListener("click", function () {
  let name = document.getElementById("your-name").value;
  let email = document.getElementById("your-email").value;
  let interest = document.getElementById("your-interest").value;

  if (!name) {
    document.getElementById("name-error").innerText = "Name cannot be blank!";
  } else {
    document.getElementById("name-error").innerText = "";
  }
  if (!email) {
    document.getElementById("email-error").innerText = "Email cannot be blank!";
  } else {
    document.getElementById("email-error").innerText = "";
  }
  if (!interest) {
    document.getElementById("interest-error").innerText = "Please chose interest!";
  } else {
    document.getElementById("interest-error").innerText = "";
  }
});
