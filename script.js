const passBox = document.querySelector("#password");
const genPass = document.querySelector("button");
const copyImg = document.querySelector(".display img");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+~|}{[]:;'><,.-=\/*-'";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    const length = prompt("Enter the length of your password! (Greater than or equal to 4)")
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passBox.value = password;
}
genPass.addEventListener("click", createPassword, false);
function copyPass() {
    console.log("Hello");
    passBox.select();
    document.execCommand("copy"); // to copy the password
}
copyImg.addEventListener("click", copyPass);