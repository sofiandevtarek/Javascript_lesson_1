function changeColor() {
  const colors = ["red", "green", "blue", "yellow", "pink", "grey", "black", "purple", "orange"];
  const random = Math.floor(Math.random() * colors.length);
  const selsctedColor = colors[random];
  document.querySelector("body").style.background = selsctedColor;
}
