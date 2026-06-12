header = document.querySelector("#header")
hom_underline = document.querySelector("#hom_underline")
pou_underline = document.querySelector("#pou_underline")
amb_underline = document.querySelector("#amb_underline")
aco_underline = document.querySelector("#aco_underline")
gas_underline = document.querySelector("#gas_underline")
eve_underline = document.querySelector("#eve_underline")
gal_underline = document.querySelector("#gal_underline")
con_underline = document.querySelector("#con_underline")

window.addEventListener("scroll", function (event) {
    y = window.scrollY
    hom_underline.dataset.active_underline="0"
    pou_underline.dataset.active_underline="0"
    amb_underline.dataset.active_underline="0"
    aco_underline.dataset.active_underline="0"
    gas_underline.dataset.active_underline="0"
    eve_underline.dataset.active_underline="0"
    gal_underline.dataset.active_underline="0"
    con_underline.dataset.active_underline="0"
    if (y > 100) {
        header.dataset.transparent = "0"
        a_logo.src = "assets/logo_dark.svg"
    } else {
        header.dataset.transparent = "1"
        a_logo.src = "assets/logo.svg"
    }
    if(y < 700) {
        hom_underline.dataset.active_underline="1"
    } else if(y < 1680) {
        pou_underline.dataset.active_underline="1"
    } else if(y < 2520) {
        amb_underline.dataset.active_underline="1"
    }
})