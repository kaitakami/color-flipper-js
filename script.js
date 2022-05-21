// DOM
const backgroundColor = document.querySelector(".change-color");
const changeColorBtn = document.getElementById("main-button");
const displayNewColor = document.getElementById("color-display");

// Button event listener
changeColorBtn.addEventListener("click", () => generateNewColor());

// Variable
const characters = [
    "a",
    "b",
    "c",
    "d",
    "f",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
];

// Generate new color, change color background and display new color
const generateNewColor = () => {
    const newColor = ["#"];
    for (let i = 0; i < 6; i++) {
        const randomNumber = parseInt(Math.random() * 14);
        newColor.push(characters[randomNumber]);
    }
    backgroundColor.style.backgroundColor = `${newColor.join("")}`;
    displayNewColor.textContent = `Background color: ${newColor.join("")}`;
};
