console.log("Teams Dashboard ");

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".add-btn");
const closeButton = document.querySelector(".close-button");

const toggleModal = () => {
  modal.classList.toggle("show-modal");
  console.log("clicked");
};

const windowOnClick = (event) => {
  if (event.target === modal) {
    toggleModal();
    console.log("clicked");
  }
};

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
