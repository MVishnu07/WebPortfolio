document.addEventListener('DOMContentLoaded', (event) => {
    const name = "Vishnu Vardhan Malkapuram";
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
