let isDraggingAmb = false;
let lastX;
gap_px = ""
gap = 0
base_px = ""
base_vw_n = 0
max_vw = 0
slider_vw = 0

function ambiente_end_drag() {
    let l = get_amb_slide()
    if (l > 0) {
        amb_slide.style.left = "0vw"
    } else if (l < max_vw) {
        amb_slide.style.left = max_vw + "vw"
    } else {
        if (l % (base_vw_n) <= base_vw_n / -2) {
            amb_slide.style.left = `${Math.floor(l / base_vw_n) * base_vw_n}vw`
        } else {
            amb_slide.style.left = `${Math.ceil(l / base_vw_n) * base_vw_n}vw`
        }
    }
}

function amb_reset() {
    rclc_prop_amb()
    amb_slide.style.left = "0vw"
}

ambient_rb.addEventListener("click", () => {
    rclc_prop_amb()
    if (!isDraggingAmb) {
        l = get_amb_slide_vw()
        if (l > max_vw) {
            amb_slide.style.left = `${l - base_vw_n}vw`
        }
    }
})

ambient_lb.addEventListener("click", () => {
    if (!isDraggingAmb) {
        l = get_amb_slide_vw()
        if (l < 0) {
            amb_slide.style.left = `${(Number(l) + base_vw_n)}vw`
        }
    }
})

function get_amb_slide() {
    let l = amb_slide.style.left
    if(l.slice(l.length-2,l.length) == "vw") {
        return Number(l.slice(0, l.length - 2))
    } else {
        l = l.slice(0, l.length - 2)
        l = pxToVw(l)
        return l
    }
}

function get_amb_slide_px() {
    let l = amb_slide.style.left
    if(l.slice(l.length-2,l.length) == "px") {
        return Number(l.slice(0, l.length - 2))
    } else {
        l = l.slice(0, l.length - 2)
        l = VWToPx(l)
        return l
    }
}

function get_amb_slide_vw() {
    let l = amb_slide.style.left
    l = l.slice(0, l.length - 2)
    return l
}

function rclc_prop_amb() {
    gap_px = window.getComputedStyle(amb_slide).gap
    base_px = window.getComputedStyle(document.querySelector(".amb_card")).width
    slide_px = window.getComputedStyle(ambient_cards).width
    slider_vw = pxToVw(Number(slide_px.slice(0,slide_px.length-2)))
    gap = Math.ceil(pxToVw(Number(gap_px.slice(0,gap_px.length-2))))
    base_vw_n = Math.ceil(pxToVw(Number(base_px.slice(0,base_px.length-2)))+gap)
    max_vw = base_vw_n*-(5-Math.floor(slider_vw/base_vw_n))
}

amb_slide.addEventListener('pointerdown', (e) => {
    rclc_prop_amb()
    isDraggingAmb = true;
    lastX = e.clientX;
});