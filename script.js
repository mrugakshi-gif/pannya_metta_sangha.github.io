const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const elements = document.querySelectorAll("p, li");

    elements.forEach(item => {
        if (item.textContent.toLowerCase().includes(value)) {
            item.style.backgroundColor = "#ffffcc";
        } else {
            item.style.backgroundColor = "transparent";
        }
    });
});
