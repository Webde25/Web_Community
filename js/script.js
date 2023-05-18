let dots = document.querySelectorAll(".dot-items");
let kegiatanImage = document.querySelector(".kegiatan-img");
let currentSlide = 0;

let listGambar = [
  "/assets/image/kegiatan-1.jpg",
  "/assets/image/kegiatan-2.jpg",
  "/assets/image/kegiatan-3.jpg",
];

function showNextSlide() {
  if (currentSlide == 3) {
    currentSlide = 0;
  }
  console.log(currentSlide);
  kegiatanImage.src = listGambar[currentSlide];

  if (currentSlide === 0) {
    dots.forEach(function (dot) {
      dot.classList.remove("active-dot");
      dot.classList.add("inactive-dot");
    });
    dots[currentSlide].classList.remove("inactive-dot");
    dots[currentSlide].classList.add("active-dot");
  } else if (currentSlide === 1) {
    dots.forEach(function (dot) {
      dot.classList.remove("active-dot");
      dot.classList.add("inactive-dot");
    });
    dots[currentSlide].classList.remove("inactive-dot");
    dots[currentSlide].classList.add("active-dot");
  } else if (currentSlide === 2) {
    dots.forEach(function (dot) {
      dot.classList.remove("active-dot");
      dot.classList.add("inactive-dot");
    });
    dots[currentSlide].classList.remove("inactive-dot");
    dots[currentSlide].classList.add("active-dot");
  }

  currentSlide++;
}

var timer = setInterval(showNextSlide, 2000);

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    dots.forEach(function (dot) {
      dot.classList.remove("active-dot");
      dot.classList.add("inactive-dot");
    });

    dot.classList.remove("inactive-dot");
    dot.classList.add("active-dot");

    if (dot.id === "dot-1") {
      kegiatanImage.src = listGambar[0];
      currentSlide = 0;
    } else if (dot.id === "dot-2") {
      kegiatanImage.src = listGambar[1];
      currentSlide = 1;
    } else if (dot.id === "dot-3") {
      kegiatanImage.src = listGambar[2];
      currentSlide = 2;
    }
  });
});

function toggleDotCollor() {}
