const acc = document.getElementsByClassName("accordion");

for (let project of acc) {
    project.addEventListener("click", function () {
        const arrow = this.getElementsByTagName("span");
        arrow[0].classList.toggle("rotate");
        const panel = this.nextElementSibling;
        panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
    });
}
