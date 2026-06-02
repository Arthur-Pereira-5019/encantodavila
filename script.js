// Definitions
body = document.querySelector("body")
header = document.querySelector("#header")
amb_slide = document.querySelector("#amb_slide")
ambient_rb = document.querySelector("#ambient_rb")
ambient_lb = document.querySelector("#ambient_lb")
a_logo = document.querySelector("#a_logo")
p_frames = document.querySelectorAll(".pousada_frame")
home_slider = document.querySelector("#home_slider")
home_bg_lb = document.querySelector("#home_bg_lb")
home_bg_rb = document.querySelector("#home_bg_rb")
img_display = document.querySelector("#img_display")
img_display_img = document.querySelector("#img_display_img")

//Common
function expandImage(group, start) {
    img_display.style.display = "fixed"
    img_display_img.src = imageWithinGroup(group,start)
}

function switchImage(group, cap, r) {
    n = Number(img_display.dataset.currently)
    s = ""
    if(r == true) {
        n += 1
        if(n == cap) {
            n = 0
        }
    } else {
        n -= 1
        if(n == 0) {
            n = cap
        }
    }
    img_display_img.src = imageWithinGroup(group,n)
}

function imageWithinGroup(group, n) {
    g = document.querySelector(".img-group-"+group)
    i = g.querySelector('[data-img_group_order="'+n+'"]')
    img_display.dataset.currently = String(n)
    return i.src
}


// Home
home_slider.addEventListener("pointerover", () => {
    home_bg_lb.style.opacity = 1
    home_bg_rb.style.opacity = 1
})

home_slider.addEventListener("pointerout", () => {
    home_bg_lb.style.opacity = 0
    home_bg_rb.style.opacity = 0
})

home_bg_lb.addEventListener("click", () => {
    switchhomebg(true)
})

home_bg_rb.addEventListener("click", () => {
    switchhomebg(false)
})


let homebgswitchid
function startHBGSwitch() {
    homebgswitchid = setTimeout(() => {
        switchhomebg(false)
    }, 9000);
}
startHBGSwitch()

function switchhomebg(l) {
    r = home_slider.style.right
    r = Number(r.slice(0,r.length-1))
    if(l == false) {
        if(r < 200) {
            home_slider.style.right = (r+100)+"%"
        } else {
            home_slider.style.right = "0%"
        }
    } else {
        if(r > 0) {
            home_slider.style.right = (r-100)+"%"
        }
    }
    clearTimeout(homebgswitchid)
    startHBGSwitch()
}

function get_homebg_slide() {
    let r = home_slider.style.r
        r = l.slice(0,l.length-2)
        r = pxToVw(r)
    return r
}

// Pousada
p_frames.forEach(e => {
    cover = document.createElement("div")
    cover.classList.add("pf_cover")
    e.appendChild(cover)
    console.log(e.dataset.img_group_order)
    e.addEventListener("click", expandImage(1, Number(e.dataset.img_group_order)))
});

// Whatsapp
whatsb = document.querySelector("#whats")
whatsb.addEventListener('click', function(event) {
    window.location.href = "https://wa.me/5547920008202?text=Mensagem%20enviada%20pelo%20site"
})

// Header
window.addEventListener("scroll",function(event) {
    if(window.scrollY > 100) {
        header.dataset.transparent = "0"
        a_logo.src="assets/logo_dark.svg"
    } else {
        header.dataset.transparent = "1"
        a_logo.src="assets/logo.svg"
    }
})

let isDragging = false;
let offsetX, offsetY;

amb_slide.addEventListener('pointerdown', (e) => {
    isDragging = true;
    offsetX = e.clientX  - amb_slide.offsetLeft;
});

document.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    amb_slide.style.left = `${e.clientX - offsetX}px`;
});

document.addEventListener('pointerup', () => {
    if(isDragging) {
        isDragging = false;
        let l = get_amb_slide()
        if(l > 0) {
            amb_slide.style.left = "0vw"
        }else if (l < -38){
            amb_slide.style.left = "-38vw"
        }else {
            if(l%19 <= -9.5) {
                amb_slide.style.left = `${Math.floor(l/19)*19}vw`
            } else {
                amb_slide.style.left = `${Math.ceil(l/19)*19}vw`
            }
        }
    }
});

ambient_rb.addEventListener("click", () => {
    if(!isDragging) {
        l = get_amb_slide_vw()
        if(l >= -19) {
            amb_slide.style.left = `${l-19}vw`
        }
    }
})

ambient_lb.addEventListener("click", () => {
    if(!isDragging) {
        l = get_amb_slide_vw()
        if(l <= -19) {
            amb_slide.style.left = `${(Number(l)+19)}vw`
        }
    }
})

function get_amb_slide() {
    let l = amb_slide.style.left
        l = l.slice(0,l.length-2)
        l = pxToVw(l)
    return l
}

function get_amb_slide_vw() {
    let l = amb_slide.style.left
        l = l.slice(0,l.length-2)
    return l
}

function pxToVw(px) {
    return (px * 100) / window.innerWidth;
}

function pxToPctg(px) {
    const viewportHeight = window.innerHeight;
    return (px * 100) / viewportHeight;
}
