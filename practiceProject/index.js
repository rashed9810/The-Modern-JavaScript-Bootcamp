const form = document.getElementById("todo-form");
const input = document.getElementById("todo-text");
const list = document.getElementById("todo-list");

// Initialize an array to store the todos
let todos = [];

// Load the todos from the local storage
function loadTodos() {
  const data = localStorage.getItem("todos");
  if (data) {
    todos = JSON.parse(data);
  }
  renderTodos();
}

// Save the todos to the local storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render the todos to the UI
function renderTodos() {
  // Clear the existing list
  list.innerHTML = "";

  // Loop through the todos array
  todos.forEach((todo) => {
    // Create a new list item
    const li = document.createElement("li");
    li.setAttribute("class", "todo-item");
    li.setAttribute("data-key", todo.id);

    // Check if the todo is completed and add the class accordingly
    if (todo.completed) {
      li.classList.add("done");
    }

    // Create the HTML content for the list item
    li.innerHTML = `
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick"></label>
      <span>${todo.text}</span>
      <button class="delete-todo">X</button>
    `;

    // Append the list item to the list
    list.append(li);
  });
}

// Add a new todo to the array
function addTodo() {
  // Get the value of the input field
  const text = input.value.trim();

  // Check if the input is not empty
  if (text !== "") {
    // Create a new todo object with a unique id and the text
    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    // Push the todo to the array
    todos.push(todo);

    // Save the todos to the local storage
    saveTodos();

    // Render the todos to the UI
    renderTodos();

    // Clear the input field
    input.value = "";
  }
}

// Toggle the completed state of a todo
function toggleDone(e) {
  // Get the element that was clicked
  const item = e.target;

  // Check if the element is a checkbox
  if (item.type === "checkbox") {
    // Get the data-key attribute of the parent list item
    const key = item.parentElement.getAttribute("data-key");

    // Find the index of the todo in the array
    const index = todos.findIndex((todo) => todo.id === Number(key));

    // Toggle the completed property of the todo
    todos[index].completed = !todos[index].completed;

    // Save the todos to the local storage
    saveTodos();

    // Render the todos to the UI
    renderTodos();
  }
}

// Delete a todo from the array
function deleteTodo(e) {
  // Get the element that was clicked
  const item = e.target;

  // Check if the element is a delete button
  if (item.classList.contains("delete-todo")) {
    // Get the data-key attribute of the parent list item
    const key = item.parentElement.getAttribute("data-key");

    // Filter out the todo that matches the key
    todos = todos.filter((todo) => todo.id !== Number(key));

    // Save the todos to the local storage
    saveTodos();

    // Render the todos to the UI
    renderTodos();
  }
}

// Add an event listener for the form submission
form.addEventListener("submit", (e) => {
  // Prevent the default behavior of the form
  e.preventDefault();

  // Add a new todo
  addTodo();
});

// Add an event listener for the list click
list.addEventListener("click", (e) => {
  // Toggle the done state or delete a todo
  toggleDone(e);
  deleteTodo(e);
});

// Load the todos from the local storage when the document is ready
document.addEventListener("DOMContentLoaded", loadTodos);

