const bg = document.querySelector(".background");

const nbOfBoxes = 100;

for (let i = 0; i < nbOfBoxes; i++) {
  const box = document.createElement("div");

  box.classList.add("bg-box");

  bg.append(box);
}
