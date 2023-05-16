const review = document.querySelectorAll('.slideshow .show');
let currentIndex = 0;

function showReview(index) {
  review[currentIndex].classList.remove('active');
  review[currentIndex].style.opacity = 0;
  review[index].classList.add('active');
  review[index].style.opacity = 1;
  currentIndex = index;
}

review.forEach((text, index) => {
  text.style.opacity = 0;
  text.addEventListener('load', () => {
    if(index === 0) {
      text.classList.add('active');
      text.style.opacity = 1;
    }
  })
})

setInterval(() => {
  let nextIndex = currentIndex + 1;
  if(nextIndex >= review.length) {
    nextIndex = 0;
  }
  showReview(nextIndex)
}, 6000);