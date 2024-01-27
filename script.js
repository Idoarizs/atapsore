document.getElementById('reviewForm').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const rating = document.getElementById('rating').value;
      const review = document.getElementById('review').value;

      document.getElementById('modalFullName').innerText = fullName;
      document.getElementById('modalEmail').innerText = email;
      document.getElementById('modalRating').innerText = rating;
      document.getElementById('modalReview').innerText = review;

      $('#reviewModal').modal('show');
    }
    this.classList.add('was-validated');
  });