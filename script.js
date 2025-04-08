const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navList");

menuIcon.onclick = () => {
  navList.classList.toggle("active");
};
