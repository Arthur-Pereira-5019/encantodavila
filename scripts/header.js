header = document.querySelector("#header")

heights = [0, 0, 0, 0, 0, 0, 0, 0]
hom_underline = document.querySelector("#hom_underline")
pou_underline = document.querySelector("#pou_underline")
amb_underline = document.querySelector("#amb_underline")
aco_underline = document.querySelector("#aco_underline")
gas_underline = document.querySelector("#gas_underline")
eve_underline = document.querySelector("#eve_underline")
gal_underline = document.querySelector("#gal_underline")
con_underline = document.querySelector("#con_underline")

mobile_a_tab = document.querySelector("#mobile_a_tab")
mobile_menu = document.querySelector("#mobile_menu")
mobile_menu_phone = document.querySelector("#mobile_menu_phone")
mobile_menu_mail = document.querySelector("#mobile_menu_mail")
mobile_menu_loc = document.querySelector("#mobile_menu_loc")
content = document.querySelector("#content")

button_home = document.querySelector("#button_home")
button_pousada = document.querySelector("#button_pousada")
button_ambients = document.querySelector("#button_ambients")
button_acomodacoes = document.querySelector("#button_acomodacoes")
button_gastronomia = document.querySelector("#button_gastronomia")
button_eventos = document.querySelector("#button_eventos")
button_galeria = document.querySelector("#button_galeria")
button_contatos = document.querySelector("#button_contatos")
current_level = -1

window.addEventListener('click', (event) => {
    if (!mobile_menu.contains(event.target) && mobile_menu.dataset.active == "1") {
        close_mobile_a_tab()
    } else if (mobile_a_tab.contains(event.target)) {
        content.dataset.mobile_menu = "1"
        mobile_menu.dataset.active = "1"
    }
});


function close_mobile_a_tab() {
    content.dataset.mobile_menu = "0"
    mobile_menu.dataset.active = "0"
}


mobile_menu_mail.addEventListener("click", function () {
    window.location = "mailto:encantodavilapousada@gmail.com?subject=Gostaria%20de%20falar%20com%a%pousada";
})

mobile_menu_phone.addEventListener("click", function () {
    window.location = "https://wa.me/5547920008202?text=Mensagem%20enviada%20pelo%20site";
})

mobile_menu_loc.addEventListener("click", function () {
    let lat = "-26.9159141"
    let lng = "-49.0865473"
    let label = "Encanto da Vila"

    if (isIOS) {
        window.location.href = `maps://maps.apple.com/?q=${encodeURIComponent(label)}&ll=${lat},${lng}`;
    } else if (isAndroid) {
        window.location.href = `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(label)})`;
    } else {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    }
})

recalc_heights()


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
    if (y < heights[1]) {
        if (y < 150) {
            if (isMobile) {
                home_bg_lb.style.opacity = 1
                home_bg_rb.style.opacity = 1
            }
        }
        if (current_level != 0) {
            switchLevel(0)
            hom_underline.dataset.active_underline = "1"
            button_home.style.fontWeight = "600"
        }
    } else if (y < heights[2]) {
        if (current_level != 1) {
            switchLevel(1)
            pou_underline.dataset.active_underline = "1"
            button_pousada.style.fontWeight = "600"
        }
    } else if (y < heights[3]) {
        if (current_level != 2) {
            switchLevel(2)
            amb_underline.dataset.active_underline = "1"
            button_ambients.style.fontWeight = "600"
        }
    } else if (y < heights[4]) {
        if (current_level != 3) {
            switchLevel(3)
            aco_underline.dataset.active_underline = "1"
            button_acomodacoes.style.fontWeight = "600"
        }
    } else if (y < heights[5]) {
        if (current_level != 4) {
            switchLevel(4)
            gas_underline.dataset.active_underline = "1"
            button_gastronomia.style.fontWeight = "600"
        }
    } else if (y < heights[6]) {
        if (current_level != 5) {
            switchLevel(5)
            eve_underline.dataset.active_underline = "1"
            button_eventos.style.fontWeight = "600"
        }
    } else if (y < heights[7]) {
        if (current_level != 6) {
            switchLevel(6)
            gal_underline.dataset.active_underline = "1"
            button_galeria.style.fontWeight = "600"
        }
    } else if (y < heights[8]) {
        if (current_level != 7) {
            switchLevel(7)
            con_underline.dataset.active_underline = "1"
            button_contatos.style.fontWeight = "600"
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

function recalc_heights() {
    heights[0] = calc_height("home")
    heights[1] = calc_height("pousada")
    heights[2] = calc_height("ambients")
    heights[3] = calc_height("acomodacoes")
    heights[4] = calc_height("gastronomia")
    heights[5] = calc_height("eventos")
    heights[6] = calc_height("galeria")
    heights[7] = calc_height("comentarios")
    heights[8] = calc_height("footer")
}

function calc_height(elementTag) {
    const element = document.querySelector('#' + elementTag);
    const rect = element.getBoundingClientRect();
    const distanceFromTop = rect.top + window.scrollY - (header.clientHeight*1.3);
    return distanceFromTop
}