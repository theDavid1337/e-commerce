let header_wrapper = document.querySelector(".header_wrapper"),
  modal_wrapper_icon = document.querySelectorAll(".modal_wrapper-icon"),
  search_box = document.querySelector(".search_box"),
  modal_wrapper = document.querySelector(".modal_wrapper"),
  menu = document.querySelector(".menu"),
  toggle_menu = document.querySelector(".toggle_menu"),
  product_cards = document.querySelectorAll('.product_card'),
  search_box_input = document.querySelector(".search_box-input");


window.addEventListener("scroll", () => {
  let window_scroll = window.scrollY;

  if (window_scroll > 45) {
    header_wrapper.style.top = 0;
  } else {
    header_wrapper.style.top = `60px`;
  }
});

// window.addEventListener("load", () => {
//   localStorage.clear()
// })

modal_wrapper_icon.forEach((elem) => {
  elem.addEventListener("click", () => {
    search_box.classList.toggle("default");
    modal_wrapper.classList.toggle("default");
  });
});

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("default");
  toggle_menu.classList.toggle("default");
});