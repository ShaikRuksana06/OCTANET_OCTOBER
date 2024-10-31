document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const itemId = item.getAttribute('data-item'); 
    const targetDish = document.getElementById(itemId); 

    if (targetDish) {
      targetDish.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const scrollToTopButton = document.getElementById('scrollToTopButton');
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('submitReviewButton').addEventListener('click', () => {
  const reviewText = document.getElementById('reviewInput').value.trim();
  if (reviewText) {
    const newReview = document.createElement('div'); 
    newReview.classList.add('review'); 
    newReview.innerHTML = `<p>"${reviewText}"</p><p>⭐⭐⭐⭐⭐ - Anonymous</p>`; 
    document.querySelector('.review-list').appendChild(newReview); 
    document.getElementById('reviewInput').value = ''; 
  } else {
    alert("Please enter a review before submitting.");
  }
});
