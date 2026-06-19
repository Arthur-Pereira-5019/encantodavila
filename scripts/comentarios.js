com_slide = document.querySelector("#comentario_slider")
comentarios_cards = document.querySelector("#comentarios_cards")
com_rb = document.querySelector("#com_rb")
com_lb = document.querySelector("#com_lb")
comentarios = com_slide.querySelectorAll(".comentario")

let isDraggingCom = false;
let lastXCom;
com_gap_px = ""
com_gap = 0
com_base_px = ""
com_base_vw_n = 0
com_max_vw = 0
com_slider_vw = 0
half_card_vw = 0

rclc_prop_com()
com_slide.style.left = half_card_vw+"vw"

function com_reset() {
    rclc_prop_com()
    com_slide.style.left = half_card_vw+"vw"
    re_highlight()
}

function re_highlight() {
    h = ((get_com_slide()-half_card_vw)/com_base_vw_n*-1)+1
    comentarios.forEach(e => {
        e.dataset.selected = "0"
    });
    com_slide.querySelector(".comentario"+h).dataset.selected="1"
}

function comentario_end_drag() {
    let l = get_com_slide()
    if (l > half_card_vw || l > 0) {
        com_slide.style.left = half_card_vw+"vw"
    } else if (l < com_max_vw) {
        com_slide.style.left = com_max_vw + "vw"
    } else {
        if ((l-half_card_vw) % com_base_vw_n <= com_base_vw_n / -2) {
            com_slide.style.left = `${half_card_vw + (Math.floor(l / com_base_vw_n) * com_base_vw_n)}vw`
        } else {
            com_slide.style.left = `${half_card_vw + (Math.ceil(l / com_base_vw_n) * com_base_vw_n)}vw`
        }
    }
    re_highlight()
}

com_rb.addEventListener("click", () => {
    rclc_prop_com()
    if (!isDraggingCom) {
        l = get_com_slide_vw()
        if (l > com_max_vw) {
            com_slide.style.left = `${l - com_base_vw_n}vw`
            re_highlight()
        }
    }
})

com_lb.addEventListener("click", () => {
    if (!isDraggingCom) {
        l = get_com_slide_vw()
        if (l < 0) {
            com_slide.style.left = `${(Number(l) + com_base_vw_n)}vw`
            re_highlight()
        }
    }
})

function get_com_slide() {
    let l = com_slide.style.left
    if(l.slice(l.length-2,l.length) == "vw") {
        return Number(l.slice(0, l.length - 2))
    } else {
        l = l.slice(0, l.length - 2)
        l = pxToVw(l)
        return l
    }
}

function get_com_slide_px() {
    let l = com_slide.style.left
    if(l.slice(l.length-2,l.length) == "px") {
        return Number(l.slice(0, l.length - 2))
    } else {
        l = l.slice(0, l.length - 2)
        l = VWToPx(l)
        return l
    }
}

function get_com_slide_vw() {
    let l = com_slide.style.left
    l = l.slice(0, l.length - 2)
    return l
}

function rclc_prop_com() {
    com_gap_px = window.getComputedStyle(com_slide).gap
    com_base_px = window.getComputedStyle(document.querySelector(".comentario")).width
    com_slide_px = window.getComputedStyle(comentarios_cards).width
    com_slider_vw = pxToVw(Number(com_slide_px.slice(0,com_slide_px.length-2)))
    com_gap = Math.ceil(pxToVw(Number(com_gap_px.slice(0,com_gap_px.length-2))))
    com_base_vw_n = Math.ceil(pxToVw(Number(com_base_px.slice(0,com_base_px.length-2)))+com_gap)
    half_card_vw = Math.ceil((com_slider_vw/2) - com_base_vw_n/2)
    com_max_vw = (com_base_vw_n*-3)+half_card_vw
}

com_slide.addEventListener('pointerdown', (e) => {
    rclc_prop_com()
    isDraggingCom = true;
    lastXCom = e.clientX;
});