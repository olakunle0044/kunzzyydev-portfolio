const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
});

hiddenElements.forEach((el) => observer.observe(el));

/*nav-menu*/

const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu ul");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
 hamMenu.classList.remove("active");
 navMenu.classList.remove("active"); 
}))