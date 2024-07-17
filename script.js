/*  >> MODAL WINDOW  */

let openModal = document.querySelector(".openModal");
let openModal2 = document.querySelector(".openModal2");
let closeModal = document.querySelectorAll(".closeModal");
let blurBg = document.querySelector(".blur-bg");

openModal.addEventListener("click", function () {
  document.getElementById("passwordModal").classList.remove("hiddenModal");
  blurBg.classList.remove("hidden-blur");
});

openModal2.addEventListener("click", function () {
  document.getElementById("strengthModal").classList.remove("hiddenModal");
  blurBg.classList.remove("hidden-blur");

  // Reset the input field for strength password
  document.getElementById("strengthPassword").value = "";
});

let closeModalFunction = function () {
  document.querySelectorAll(".modalContent").forEach((modal) => {
    modal.classList.add("hiddenModal");
  });
  blurBg.classList.add("hidden-blur");

  // Reset the input field for strength password when closing strength modal
  document.getElementById("strengthPassword").value = "";
};

blurBg.addEventListener("click", closeModalFunction);
closeModal.forEach((btn) => btn.addEventListener("click", closeModalFunction));

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalFunction();
  }
});

/*  >> PASSWORD GENERATOR  */

var password = document.getElementById("password");

function genPassword() {
  resetCopyButton();
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz_!@#$%^&*()<>?[]{}|+ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
  copyButton.innerHTML = "Copied !";
}

async function copyPassword2() {
  var copyText = document.getElementById("password");
  navigator.clipboard.writeText(copyText.value);
}

async function resetCopyButton() {
  const copyButton = document.getElementById("button");
  copyButton.innerHTML = "Copy";
}

/*  >> PASSWORD STRENGTH CHECKER  */

function testStrength() {
  console.log("Test strength button clicked"); // Opens modal window of "Test Strength"
}

function checkStrength() {
  var strengthPassword = document.getElementById("strengthPassword").value;

  // Regular expressions to check for each requirement
  var lengthRegex = /.{8,}/; // 8 characters
  var spaceRegex = /\s/; // spaces
  var capitalRegex = /[A-Z]/; // capital letter
  var specialRegex = /[!@#$%^&*()_+[\]{}\\|,.<>/?]/; // special symbol

  // Check each condition
  var isLengthValid = lengthRegex.test(strengthPassword);
  var hasNoSpaces = !spaceRegex.test(strengthPassword);
  var hasCapitalLetter = capitalRegex.test(strengthPassword);
  var hasSpecialSymbol = specialRegex.test(strengthPassword);

  // Prepare feedback message
  var feedbackMessage = "Passwords should have:\n";
  if (!isLengthValid) {
    feedbackMessage += "- At least 8 characters\n";
  }
  if (!hasNoSpaces) {
    feedbackMessage += "- No spaces\n";
  }
  if (!hasCapitalLetter) {
    feedbackMessage += "- At least one capital letter\n";
  }
  if (!hasSpecialSymbol) {
    feedbackMessage += "- At least one special symbol\n";
  }

  // Determine the strength based on conditions
  if (isLengthValid && hasNoSpaces && hasCapitalLetter && hasSpecialSymbol) {
    alert("Password strength: Strong");
  } else {
    alert("Password strength: Weak\n\n" + feedbackMessage);
  }
}
