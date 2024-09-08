// ===================TYPING ANIMATION============================
var typed = new Typed(".Typing",{
    strings:["","Web Developer","","Web Designer","Software Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ===================ACTIVE NAVBAR SECTION DISPLAY=================
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".NavBar a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            
            // Add active class to the clicked link
            this.classList.add("active");
        });
    });
});