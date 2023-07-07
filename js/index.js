const form = document.querySelector("form");
const email = document.querySelector("input");
const errIcon = document.querySelector(".error-icon");
const errMsg = document.querySelector(".error-msg");
const submitBtn = document.querySelector("button");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value || !emailRegex.test(email.value)) {
    errIcon.style.display = "block";
    errMsg.style.display = "block";
    submitBtn.style.height = "68%";
  }
});
