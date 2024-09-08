// =========================TOGGLE STYLE SWITCHER========================
const styleSwitcherToggle = document.querySelector(".StyleSwitcherToggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".StyleSwitcher").classList.toggle("open");
})

// ===================HIDE STYLE SWITCHER MENU ON SCROLL===========================
window.addEventListener("scroll",() => {
    if(document.querySelector(".StyleSwitcher").classList.contains("open"))
    {
        document.querySelector(".StyleSwitcher").classList.remove("open");
    }
})

// =========================THEME COLORS========================
const alternateStyles = document.querySelectorAll(".AlternateStyle");
function setActivestyle(color)
{
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

// =========================THEME LIGHT AND DARK MODE========================
const dayNight = document.querySelector(".DayNight");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})



