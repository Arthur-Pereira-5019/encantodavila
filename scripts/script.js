// Definitions
body = document.querySelector("body")
amb_slide = document.querySelector("#amb_slide")
ambient_rb = document.querySelector("#ambient_rb")
ambient_cards = document.querySelector("#ambients_cards")
ambient_lb = document.querySelector("#ambient_lb")
a_logo = document.querySelector("#a_logo")
p_frames = document.querySelectorAll(".pousada_frame")
loc_frames = document.querySelectorAll(".loc_frame")
home_slider = document.querySelector("#home_slider")
gastronomia_slider = document.querySelector("#gastronomia_slider")
event_slider = document.querySelector("#event_slider")
home_bg_lb = document.querySelector("#home_bg_lb")
home_bg_rb = document.querySelector("#home_bg_rb")
gastronomia_im_rb = document.querySelector("#gastronomia_im_rb")
gastronomia_im_lb = document.querySelector("#gastronomia_im_lb")
event_im_rb = document.querySelector("#event_im_rb")
event_im_lb = document.querySelector("#event_im_lb")
img_display = document.querySelector("#img_display")
img_display_img = document.querySelector("#img_display_img")
img_display_lb = document.querySelector("#img_display_lb")
img_display_rb = document.querySelector("#img_display_rb")
img_display_close = document.querySelector("#img_display_close")
img_count = document.querySelector("#img_count")
returnHeight = 0
let resizeTimer;

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isAndroid = /Android/.test(navigator.userAgent);
    const isMobile = isIOS || isAndroid;

//Common
img_display_close.addEventListener("click", function () {
    closeExpandedImage()
})

function expandImage(group, start) {
    img_display.style.display = "block"
    img_display_img.src = imageWithinGroup(group, start)
    returnHeight = window.scrollY
    body.style.overflowY = "hidden"
    body.style.overflowX = "hidden"
}

function closeExpandedImage() {
    img_display.style.display = "none"
    body.style.overflowY = "auto"
    body.style.overflowX = "hidden"
}

document.addEventListener('keydown', (event) => {
    if ((event.code == "Escape") && img_display.style.display == "block") {
        event.preventDefault();
        closeExpandedImage()
    }
});


img_display.addEventListener('click', function (e) {
    if (e.target !== this) return;
    d = img_display.dataset
    closeExpandedImage()
});

img_display_lb.addEventListener("click", function () {
    d = img_display.dataset
    switchImage(Number(d.currently_g), Number(d.currently_c), false)
})

img_display_rb.addEventListener("click", function () {
    d = img_display.dataset
    switchImage(Number(d.currently_g), Number(d.currently_c), true)
})


function switchImage(group, cap, r) {
    n = Number(img_display.dataset.currently)
    s = ""
    if (r == true) {
        n += 1
        if (n > cap) {
            n = 0
        }
    } else {
        n -= 1
        if (n < 0) {
            n = cap
        }
    }
    img_display_img.src = imageWithinGroup(group, n)
}

function imageWithinGroup(group, n) {
    console.log(n)
    g = document.querySelector(".img-group-" + group)
    i = g.querySelector('[data-img_group_order="' + n + '"]')
    img_display.dataset.currently = String(n)
    img_display.dataset.currently_g = String(group)
    c = g.dataset.img_group_cap
    img_display.dataset.currently_c = c
    c = Number(c) + 1
    n = Number(n) + 1
    img_count.textContent = n + " / " + c
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

gastronomia_im_rb.addEventListener("click", () => {
    switchgastronomiabg(false)
})

gastronomia_im_lb.addEventListener("click", () => {
    switchgastronomiabg(true)
})

event_im_rb.addEventListener("click", () => {
    switcheventbg(false)
})

event_im_lb.addEventListener("click", () => {
    switcheventbg(true)
})


let homebgswitchid
function startHBGSwitch() {
    homebgswitchid = setTimeout(() => {
        switchhomebg(false)
        switchgastronomiabg(false)
        switcheventbg(false)
        clearTimeout(homebgswitchid)
        startHBGSwitch()
    }, 9000);
}
startHBGSwitch()

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    dom_reset()
  }, 150);
});

function dom_reset() {
    com_reset()
    amb_reset()
    reset_acomodacoes()
    recalc_heights()
}

function switchgastronomiabg(l) {
    r = gastronomia_slider.style.right
    r = Number(r.slice(0, r.length - 1))
    if (l == false) {
        if (r < 100) {
            gastronomia_slider.style.right = (r + 100) + "%"
        } else {
            gastronomia_slider.style.right = "0%"
        }
    } else {
        if (r > 0) {
            gastronomia_slider.style.right = (r - 100) + "%"
        }
    }
}

function switcheventbg(l) {
    r = event_slider.style.right
    r = Number(r.slice(0, r.length - 1))
    if (l == false) {
        if (r < 100) {
            event_slider.style.right = (r + 100) + "%"
        } else {
            event_slider.style.right = "0%"
        }
    } else {
        if (r > 0) {
            event_slider.style.right = (r - 100) + "%"
        }
    }
}

function switchhomebg(l) {
    r = home_slider.style.right
    r = Number(r.slice(0, r.length - 1))
    if (l == false) {
        if (r < 200) {
            home_slider.style.right = (r + 100) + "%"
        } else {
            home_slider.style.right = "0%"
        }
    } else {
        if (r > 0) {
            home_slider.style.right = (r - 100) + "%"
        } else {
            home_slider.style.right = "200%"
        }
    }
}

function switcheventobg(l) {
    r = home_slider.style.right
    r = Number(r.slice(0, r.length - 1))
    if (l == false) {
        if (r < 200) {
            home_slider.style.right = (r + 100) + "%"
        } else {
            home_slider.style.right = "0%"
        }
    } else {
        if (r > 0) {
            home_slider.style.right = (r - 100) + "%"
        }
    }
}

function get_homebg_slide() {
    let r = home_slider.style.r
    r = l.slice(0, l.length - 2)
    r = pxToVw(r)
    return r
}

// Pousada
p_frames.forEach(e => {
    cover = document.createElement("div")
    cover.classList.add("pf_cover")
    e.appendChild(cover)
    e.addEventListener("click", function () {
        expandImage(1, Number(e.querySelector(".pousada_img").dataset.img_group_order))
    })
    e.addEventListener("pointerover",function() {
        e.querySelector("img").style.transform = "scale(1.05)"
    })
    e.addEventListener("pointerout",function() {
        e.querySelector("img").style.transform = "scale(1)"
    })
});

loc_frames.forEach(e => {
    cover = document.createElement("div")
    cover.classList.add("pf_cover")
    e.appendChild(cover)
    e.addEventListener("click", function () {
        expandImage(2, Number(e.querySelector(".pousada_img").dataset.img_group_order))
    })
    e.addEventListener("pointerover",function() {
        e.querySelector("img").style.transform = "scale(1.05)"
    })
    e.addEventListener("pointerout",function() {
        e.querySelector("img").style.transform = "scale(1)"
    })
});

// Whatsapp
whatsb = document.querySelector("#whats")
whatsb.addEventListener('click', function (event) {
    window.location.href = "https://wa.me/5547920008202?text=Mensagem%20enviada%20pelo%20site"
})

document.addEventListener('pointermove', (e) => {
    if (isDraggingAmb) {
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        l = get_amb_slide_px()
        amb_slide.style.left = `${l + dx}px`;
    } else if(isDraggingCom) {
        const dx = e.clientX - lastXCom;
        lastXCom = e.clientX;
        l = get_com_slide_px()
        com_slide.style.left = `${l + dx}px`;
    }

});



document.addEventListener('pointerup', () => {
    if (isDraggingAmb) {
        isDraggingAmb = false;
        ambiente_end_drag()
    }
    if (isDraggingCom) {
        isDraggingCom = false;
        comentario_end_drag()
    }
});

function pxToVw(px) {
    return (px * 100) / window.innerWidth;
}

function VWToPx(vw) {
    return (vw*window.innerWidth)/100
}

function pxToPctg(px) {
    const viewportHeight = window.innerHeight;
    return (px * 100) / viewportHeight;
}
