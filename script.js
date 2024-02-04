/*  >> MODAL WINDOW  */

let modalContent = document.querySelector(".modal-content");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let blurBg = document.querySelector(".blur-bg");

openModal.addEventListener("click", function () {
  modalContent.classList.remove("hidden-modal");
  blurBg.classList.remove("hidden-blur");
});

let closeModalFunction = function () {
  modalContent.classList.add("hidden-modal");
  blurBg.classList.add("hidden-blur");
};

blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modalContent.classList.contains("hidden")) {
    closeModalFunction();
  }
});

/*  >> PASSWORD GENERATOR  */

var password = document.getElementById("password");

function genPassword() {
  resetCopyButton()
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 10;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

document.getElementById("password").value = password;

async function copyPassword() {
  
  copyPassword1();
  copyPassword2();
}

async function copyPassword1() {
  const copyButton = document.getElementById("button");
  copyButton.innerHTML = "Copied!";
}

async function copyPassword2() {
  var copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.value);
}

async function resetCopyButton() {
  const copyButton = document.getElementById("button");
  copyButton.innerHTML = "Copy";
}