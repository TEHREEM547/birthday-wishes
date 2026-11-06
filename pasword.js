
let password = "";
let correctPassword = "1102";

const dots = document.querySelectorAll(".dot");
const message = document.getElementById("message");
const lockScreen = document.getElementById("lockScreen");
const successScreen = document.getElementById("successScreen");

// Add Number
function addNumber(number) {

    if (password.length < 4) {

        password += number;

        updateDots();

        if (password.length === 4) {
            checkPassword();
        }
    }
}

// Update Password Dots
function updateDots() {

    dots.forEach((dot, index) => {

        if (index < password.length) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });
}

// Delete Number
function deleteNumber() {

    password = password.slice(0, -1);

    updateDots();

    message.innerText = "";
}

// Check Password
function checkPassword() {

    if (password === correctPassword) {

        message.innerText = "Correct Password!";

        setTimeout(() => {
            lockScreen.style.display = "none";
            successScreen.style.display = "block";
        }, 500);

    } else {

        message.innerText = "Wrong Passcode! Try Again.";

        lockScreen.classList.add("shake");

        setTimeout(() => {

            password = "";

            updateDots();

            lockScreen.classList.remove("shake");

        }, 500);
    }
}
