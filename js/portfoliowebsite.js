const skills = document.querySelectorAll(".skill");
var counter = 0;

skills.forEach((skill, index) => {
  skill.style.left = `${index * 100}%`;
});

const prev = () => {
  if (counter == 0) {
    counter = 4;
    slide();
  } else {
    counter--;
    slide();
  }
};

const next = () => {
  if (counter == 4) {
    counter = 0;
    slide();
  } else {
    counter++;
    slide();
  }
};

const slide = () => {
  skills.forEach((skill) => {
    skill.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function toggleMenu() {
  const navUl = document.querySelector("nav ul");
  navUl.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value;
  });
});
