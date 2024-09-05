document.addEventListener('DOMContentLoaded', (event) => {
    const name = "I'm Vishnu Malkapuram";
    const typedName = document.getElementById('typed-name');

    let index = 0;

    function type() {
        if (index < name.length) {
            typedName.innerHTML += name.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust the speed here
        }
    }

    type();
});


document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    function handleScroll() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
});
