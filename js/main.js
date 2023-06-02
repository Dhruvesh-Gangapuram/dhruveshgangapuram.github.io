new CircleType(document.getElementById("menu_circle"));

var menuBg_right = document.getElementById("menuBg_right");
var menuBg_left = document.getElementById("menuBg_left");
var menu_btn = document.getElementById("menu_btn");
var menuContent = document.getElementById("menuContent");

var home = document.getElementById("Home");
var about = document.getElementById("About");
var code = document.getElementById("Code");
var design = document.getElementById("UI Design");
var contact = document.getElementById("Contact");

var rightClick = document.getElementById("rightClick");
var designTitle = document.getElementById("designTitle");
var image = document.querySelectorAll("#imgContainer img");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  if (menu_btn.classList.contains("active")) {
    menuBg_right.style.left = "50%";
    menuBg_left.style.left = "0%";
    menu_btn.style.zIndex = "11";
    menuContent.style.display = "flex";
  } else {
    menuBg_right.style.left = "100%";
    menuBg_left.style.left = "-50%";
    menuContent.style.display = "none";
  }
});

var menu = document.querySelectorAll("a");
var section = document.querySelectorAll("section");

var Y = 0;

menu[0].addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  let menuTitle = menu[0].textContent;
  sectionFunction(menuTitle);
  home.style.display = "none";
  code.style.display = "none";
  design.style.display = "none";
  contact.style.display = "none";
});

menu[1].addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  let menuTitle = menu[1].textContent;
  sectionFunction(menuTitle);
  home.style.display = "none";
  about.style.display = "none";
  code.style.display = "none";
  contact.style.display = "none";
});

menu[2].addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  let menuTitle = menu[2].textContent;
  sectionFunction(menuTitle);
  home.style.display = "none";
  about.style.display = "none";
  design.style.display = "none";
  contact.style.display = "none";
});

menu[3].addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  let menuTitle = menu[3].textContent;
  sectionFunction(menuTitle);
  home.style.display = "none";
  about.style.display = "none";
  design.style.display = "none";
  code.style.display = "none";
});

function sectionFunction(title) {
  section.forEach((section) => {
    let sectionTitle = section.getAttribute("id");
    if (title == sectionTitle) {
      let sectionID = document.getElementById(sectionTitle);
      sectionID.style.display = "block";
      menuBg_right.style.left = "100%";
      menuBg_left.style.left = "-50%";
      menuContent.style.display = "none";
    }
  });
}

rightClick.addEventListener("click", (e) => {
  console.log(e);
  Y = Y + 1;
  if (Y == 1) {
    let imageID0 = image[4].getAttribute("id");
    let imageanimate0 = document.getElementById(imageID0);
    imageanimate0.classList.remove("animate__animated", "animate__rollOut");
    imageanimate0.style.display = "none";

    let imageID = image[0].getAttribute("id");
    let imageanimate = document.getElementById(imageID);
    imageanimate.classList.add("animate__animated", "animate__rollOut");

    let imageID2 = image[1].getAttribute("id");
    let imageanimate2 = document.getElementById(imageID2);
    imageanimate2.style.display = "block";
    imageanimate2.classList.add("animate__animated", "animate__rollIn");

    designTitle.innerHTML = "Powerhouse gym portfolio";
  }

  if (Y == 2) {
    let imageID0 = image[0].getAttribute("id");
    let imageanimate0 = document.getElementById(imageID0);
    imageanimate0.classList.remove("animate__animated", "animate__rollOut");
    imageanimate0.style.display = "none";

    let imageID1 = image[1].getAttribute("id");
    let imageanimate1 = document.getElementById(imageID1);
    imageanimate1.classList.add("animate__animated", "animate__rollOut");

    let imageID2 = image[2].getAttribute("id");
    let imageanimate2 = document.getElementById(imageID2);
    imageanimate2.style.display = "block";
    imageanimate2.classList.add("animate__animated", "animate__rollIn");

    
    designTitle.innerHTML = "Candy Floss Explicit's shopping app";
    
  }

  if (Y == 3) {
    let imageID0 = image[1].getAttribute("id");
    let imageanimate0 = document.getElementById(imageID0);
    imageanimate0.classList.remove("animate__animated", "animate__rollOut");
    imageanimate0.style.display = "none";

    let imageID1 = image[2].getAttribute("id");
    let imageanimate1 = document.getElementById(imageID1);
    imageanimate1.classList.add("animate__animated", "animate__rollOut");

    let imageID2 = image[3].getAttribute("id");
    let imageanimate2 = document.getElementById(imageID2);
    imageanimate2.style.display = "block";
    imageanimate2.classList.add("animate__animated", "animate__rollIn");

    
    designTitle.innerHTML = "Login page in Glassmorphism";
    
  }

  if (Y == 4) {
    let imageID0 = image[2].getAttribute("id");
    let imageanimate0 = document.getElementById(imageID0);
    imageanimate0.classList.remove("animate__animated", "animate__rollOut");
    imageanimate0.style.display = "none";

    let imageID1 = image[3].getAttribute("id");
    let imageanimate1 = document.getElementById(imageID1);
    imageanimate1.classList.add("animate__animated", "animate__rollOut");

    let imageID2 = image[4].getAttribute("id");
    let imageanimate2 = document.getElementById(imageID2);
    imageanimate2.style.display = "block";
    imageanimate2.classList.add("animate__animated", "animate__rollIn");

    
    designTitle.innerHTML = "Nike's website";
    
  }

  if (Y == 5) {
    console.log("shdjks");
    let imageID0 = image[3].getAttribute("id");
    let imageanimate0 = document.getElementById(imageID0);
    imageanimate0.classList.remove("animate__animated", "animate__rollOut");
    imageanimate0.style.display = "none";

    let imageID1 = image[4].getAttribute("id");
    let imageanimate1 = document.getElementById(imageID1);
    imageanimate1.classList.add("animate__animated", "animate__rollOut");

    let imageID2 = image[0].getAttribute("id");
    let imageanimate2 = document.getElementById(imageID2);
    imageanimate2.style.display = "block";
    imageanimate2.classList.add("animate__animated", "animate__rollIn");

    designTitle.innerHTML = "Foodie's Menu";
    Y = 0;
  }
});
