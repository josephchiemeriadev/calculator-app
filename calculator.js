let input = document.getElementById("input");
let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "C") {
      input.value = "";
    } else if (btn.textContent === "del") {
      input.value = input.value.slice(0, -1);
    } else if (btn.textContent === "=") {
      input.value = eval(input.value);
    } else if (btn.textContent === "%") {
      input.value = input.value / 100;
    } else {
      input.value += btn.textContent;
    }
  });
});
