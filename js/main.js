let s_button = document.getElementById("btn_top");
let imgs = document.querySelectorAll(".m_container img");

window.addEventListener("scroll", () => {
  s_button.style.opacity = "1";
  s_button.style.transition = "5s";
});

s_button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  var my_name = document.getElementById("name");
  let value = window.scrollY;
  my_name.style.marginTop = -value + "px";
});
