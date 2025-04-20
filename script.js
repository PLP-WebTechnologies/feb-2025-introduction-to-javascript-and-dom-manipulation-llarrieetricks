function changeContent() {
  const text = document.getElementById("dynamic-text");
  text.textContent = "You've changed the text and styles with JavaScript! 🎉";
  text.style.color = "white";
  text.style.backgroundColor = "teal";
  text.style.padding = "10px";
  text.style.borderRadius = "10px";
}

function addElement() {
  const container = document.getElementById("element-container");
  const newPara = document.createElement("p");
  newPara.textContent = "A new element has been added dynamically!";
  newPara.style.color = "green";
  container.appendChild(newPara);
}

function removeElement() {
  const container = document.getElementById("element-container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}
