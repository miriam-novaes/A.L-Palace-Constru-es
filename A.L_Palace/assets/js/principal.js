window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0)";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 8000);
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

function openModal(imageName) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageName;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideInd = 0;
showTestimonials();

function showTestimonials() {
  let testimonials = document.getElementsByClassName("testimonial");
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  slideInd++;
  if (slideInd > testimonials.length) {
    slideInd = 1;
  }
  testimonials[slideInd - 1].style.display = "block";
  setTimeout(showTestimonials, 5000);
}
