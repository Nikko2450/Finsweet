const mobileMenu = () => {
  const menu = document.querySelector(".js-menu");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove("is-active");
      menu.classList.remove("is-active");
    } else {
      hamburger.classList.add("is-active");
      menu.classList.add("is-active");
    }
  })
}

mobileMenu();
console.log("1")