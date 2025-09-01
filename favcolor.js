let randomColor;
const favorite = document.querySelector(".favorite");
const input = document.querySelector("input");

function favRandomColor() {
  randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function likeColor() {
  //   const todoText = `#${randomColor}`;
  const todoText = input.value;
  input.value = `#${randomColor}`;

  const todoElement = document.createElement("div");
  todoElement.classList = "...";

  const textElement = document.createElement("p");
  textElement.innerText = `#${randomColor}`;

  textElement.style.backgroundColor = `#${randomColor}`;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<svg>...</svg>"; // Trash icon
  deleteButton.classList = "...";
  deleteButton.onclick = () => {
    todoElement.remove();
  };

  todoElement.append(textElement, deleteButton);
  favorite.appendChild(todoElement);
}
