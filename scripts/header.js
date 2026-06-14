header = document.querySelector("#header")
hom_underline = document.querySelector("#hom_underline")
pou_underline = document.querySelector("#pou_underline")
amb_underline = document.querySelector("#amb_underline")
aco_underline = document.querySelector("#aco_underline")
gas_underline = document.querySelector("#gas_underline")
eve_underline = document.querySelector("#eve_underline")
gal_underline = document.querySelector("#gal_underline")
con_underline = document.querySelector("#con_underline")

button_home = document.querySelector("#button_home")
button_pousada = document.querySelector("#button_pousada")
button_ambients = document.querySelector("#button_ambients")
button_acomodacoes = document.querySelector("#button_acomodacoes")
button_gastronomia = document.querySelector("#button_gastronomia")
button_eventos = document.querySelector("#button_eventos")
button_galeria = document.querySelector("#button_galeria")
button_contatos = document.querySelector("#button_contatos")
current_level = -1

window.addEventListener("scroll", function (event) {
    y = window.scrollY
    if (isMobile) {
        home_bg_lb.style.opacity = 0
        home_bg_rb.style.opacity = 0
    }
    if (y > 100) {
        header.dataset.transparent = "0"
        a_logo.src = "assets/logo_dark.svg"
    } else {
        header.dataset.transparent = "1"
        a_logo.src = "assets/logo.svg"
    }
    if (y < 700) {
        if (y < 150) {
            if (isMobile) {
                home_bg_lb.style.opacity = 1
                home_bg_rb.style.opacity = 1
            }
        }
        if(current_level != 0) {
            switchLevel(0)
            hom_underline.dataset.active_underline = "1"
            button_home.style.fontWeight = "600"
        }
    } else if (y < 1480) {
        if(current_level != 1) {
            switchLevel(1)
            pou_underline.dataset.active_underline = "1"
            button_pousada.style.fontWeight = "600"
        }
    } else if (y < 2520) {
        if(current_level != 2) {
            switchLevel(2)
            amb_underline.dataset.active_underline = "1"
            button_ambients.style.fontWeight = "600"
        }
    }
})

function switchLevel(nl) {
    hom_underline.dataset.active_underline = "0"
    pou_underline.dataset.active_underline = "0"
    amb_underline.dataset.active_underline = "0"
    aco_underline.dataset.active_underline = "0"
    gas_underline.dataset.active_underline = "0"
    eve_underline.dataset.active_underline = "0"
    gal_underline.dataset.active_underline = "0"
    con_underline.dataset.active_underline = "0"
    
    button_home.style.fontWeight = "400"
    button_pousada.style.fontWeight = "400"
    button_ambients.style.fontWeight = "400"
    button_acomodacoes.style.fontWeight = "400"
    button_gastronomia.style.fontWeight = "400"
    button_eventos.style.fontWeight = "400"
    button_galeria.style.fontWeight = "400"
    button_contatos.style.fontWeight = "400"
    current_level = nl
}