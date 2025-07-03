const colorChanger = document.getElementById("change-color");
const counterValue = document.getElementById("counter-value");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
let counter = 0;

counterValue.innerText = counter;

// increment
increment.addEventListener("click", () => {
  counter += 2;
  counterValue.innerText = counter;
});

// decrement
decrement.addEventListener("click", () => {
  counter--;
  counterValue.innerText = counter;
});

// reset
reset.addEventListener("click", () => {
  counter = 0;
  counterValue.innerText = counter;
});

counterValue.addEventListener("click", () => { 
  const colors = ["red", "green", "yellow"];
  const random = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[random];
});