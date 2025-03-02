// Select the button and output div
const button = document.getElementById("myButton");
const output = document.getElementById("output");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Create a new paragraph element
  const paragraph = document.createElement("p");
  paragraph.textContent = "You clicked the button! DOM Manipulation successful 🎉";

  // Append the new paragraph to the output div
  output.appendChild(paragraph);

  // Change button text
  button.textContent = "Clicked!";
});

// Add a function to clear the output div
const clearOutput = () => {
  output.innerHTML = "";
};

// Add a function to change the background color of the output div
const changeBackgroundColor = (color) => {
  output.style.backgroundColor = color;
};

// Add a function to toggle the visibility of the output div
const toggleVisibility = () => {
  if (output.style.display === "none") {
    output.style.display = "block";
  } else {
    output.style.display = "none";
  }
};

// Add event listeners for additional buttons
document.getElementById("clearButton").addEventListener("click", clearOutput);
document.getElementById("colorButton").addEventListener("click", () => changeBackgroundColor("lightblue"));
document.getElementById("toggleButton").addEventListener("click", toggleVisibility);