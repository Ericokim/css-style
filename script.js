function changeBackground() {
  const color = document.getElementById("color-input").value;
  document.body.style.backgroundColor = color;
}

function generateRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}
