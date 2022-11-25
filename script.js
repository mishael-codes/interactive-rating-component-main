let container = document.querySelector(".container");
let thanks = document.querySelector(".thanks");
let submitBtn = document.getElementById("submitBtn");
let ratings = document.querySelectorAll(".num");
let rated = document.getElementById("rated");

submitBtn.addEventListener("click", () => {
  container.classList.add("thanks");
  thanks.classList.remove("thanks");
});

ratings.forEach((rate) => {
  rate.addEventListener("click", () => {
    rated.textContent = rate.textContent;
  });
});
