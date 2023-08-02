const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

// 1. select elements todosContainer
const todosContainer = document.querySelector("#todosContainer");
// 2. iterating over todos
todos.forEach((todo) => {
  // 3. forEach todo, insert a todo item into todosContainer
  const todoCard = 
    `<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
      <input ${todo.done ? "checked" : ""} type="checkbox" class="d-flex form-check-input me-1" />
      <div>${todo.title}</div>
    </div>`;
  todosContainer.insertAdjacentHTML(
    "beforeend", 
    todoCard
    );
});


// 1. Select button, input
const button = document.querySelector("#addButton");
const input = document.querySelector("#input");
// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. insert the input value into the todosContainer
  const todoCard = 
    `<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
      <input type="checkbox" class="d-flex form-check-input me-1" />
      <div>${input.value}</div>
    </div>`;
  todosContainer.insertAdjacentHTML("afterbegin", todoCard);
});