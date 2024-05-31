const partBg = document.querySelectorAll(".bg");

const boxes = 100;

partBg.forEach(function (part) {
  for (let i = 0; i < boxes; i++) {
    const boxx = document.createElement("div");

    boxx.classList.add("part-box");

    part.append(boxx);
  }
});

const partList = document.querySelectorAll(".part");

partList.forEach(function (part, i) {
  part.style.transitionDelay = i * 0.2 + "s";
});
