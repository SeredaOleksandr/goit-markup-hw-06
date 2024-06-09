const modalBurger = document.querySelector(".header-burger-mob");
const modalClose = document.querySelector(".modal-close");
const backdrop = document.querySelector(".backdrop");

modalBurger.addEventListener("click", (show) => {
  backdrop.classList.add("is-open");
});

modalClose.addEventListener("click", (close) => {
  backdrop.classList.remove("is-open");
});

const showYagidka = document.querySelector(".footer-btn");

if (showYagidka) {
  showYagidka.setAttribute("type", "button");

  showYagidka.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "https://yagidka.com.ua/";
  });
}
