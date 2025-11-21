const collaps = document.getElementById("collaps")
const text = document.querySelectorAll('.text');
const arrow = document.getElementById("arrow");


arrow.addEventListener("click", function () {
    if (text[0].classList.contains("hidden")) {
        text.forEach(item => item.classList.remove("hidden"));
        arrow.src = "/assets/images/left-arrow.svg";
    } else {
        text.forEach(item => item.classList.add("hidden"));
        arrow.src = "/assets/images/right-arrow.svg";
    }
});

const logout = document.getElementById("logout")
logout.addEventListener("click", function(){
    window.location="http://127.0.0.1:5500/index.html"
})



