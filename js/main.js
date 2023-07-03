window.addEventListener("scroll", () => {
  var my_name = document.getElementById("name");
  let value = window.scrollY;
  my_name.style.marginTop = value + "px";
});
