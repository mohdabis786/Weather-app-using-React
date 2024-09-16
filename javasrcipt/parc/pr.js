let btn = document.querySelector("#bt1");
let mode = "black";

const change = () => {
    if (mode) {
        btn.style.background = "green";
        mode = false; // Update mode
    } else {
        btn.style.background = "red";
        mode = "red"; // Update mode
        mode=true
    }
};

btn.addEventListener("click", change);


