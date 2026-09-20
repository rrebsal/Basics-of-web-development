const infoDialog = document.querySelector("#infodia");
const openBtn = document.querySelector("#open-dialog-btn");
const closeBtn = document.querySelector("#close-dialog-btn");

const signinDialog = document.querySelector("#signin-dialog");
const signinLink = document.querySelector("#signin-link");
const bottomSignupBtn = document.querySelector("#bottomsign-signup-btn");
const closeSigninBtn = document.querySelector("#close-signin-btn");
const dialogForm = document.querySelector("#dialog-form");
const confirmation = document.querySelector("#dialog-confirmation");

openBtn.addEventListener("click", () => {
  infoDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  infoDialog.close();
});

signinLink.addEventListener("click", (event) => {
  event.preventDefault();
  signinDialog.showModal();
});

bottomSignupBtn.addEventListener("click", () => {
  signinDialog.showModal();
});

closeSigninBtn.addEventListener("click", () => {
  signinDialog.close();
});
