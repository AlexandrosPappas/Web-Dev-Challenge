const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close-btn");
const mobileNavigation = document.getElementById("mobile-nav");

const mobileNavActivation = () => {
  mobileNavigation.style.display = "block";
};
const mobileNavDeactivation = () => {
  mobileNavigation.style.display = "none";
};

burger.addEventListener("click", mobileNavActivation);
closeBtn.addEventListener("click", mobileNavDeactivation);
