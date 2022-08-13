const reviewsContanier = document.querySelector(".reviews");

fetch("/reviews", (res) => {

    res.forEach(element => {
        reviewsContanier.innerHTML += `
        <div class="review-contanier">
          <div class="review-content">${element.review}</div>
          <div class="reviewer-name">${element.name}</div>
          </div>
        `
    });
})
