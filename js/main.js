let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("navbar-scrolled");
    }
}
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

function sendMail() {
    var params = {
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_bdrkg4j", "template_fy9ljlx", params).then(function (res) {
        alert("Success! " + res.status)
    })
}