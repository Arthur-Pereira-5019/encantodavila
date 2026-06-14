// Definitions
body = document.querySelector("body")
amb_slide = document.querySelector("#amb_slide")
ambient_rb = document.querySelector("#ambient_rb")
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

// Header


let isDragging = false;
let lastX;
gap_px = ""
gap = 0
base_px = ""
base_vw_n = 0
max_v2 = 0

function rclc_prop() {
    gap_px = window.getComputedStyle(document.querySelector("#amb_slide")).gap
    base_px = window.getComputedStyle(document.querySelector(".amb_card")).width
    gap = Math.ceil(pxToVw(Number(gap_px.slice(0,gap_px.length-2))))
    base_vw_n = Math.ceil(pxToVw(Number(base_px.slice(0,base_px.length-2)))+gap)
    max_vw = base_vw_n*-2
}

amb_slide.addEventListener('pointerdown', (e) => {
    rclc_prop()
    isDragging = true;
    lastX = e.clientX;
});

document.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX;
    lastX = e.clientX;
    l = get_amb_slide_px()
    amb_slide.style.left = `${l + dx}px`;
});



document.addEventListener('pointerup', () => {
    if (isDragging) {
        isDragging = false;
        let l = get_amb_slide()
        if (l > 0) {
            amb_slide.style.left = "0vw"
        } else if (l < max_vw) {
            amb_slide.style.left = max_vw+"vw"
        } else {
            if (l % (base_vw_n) <= base_vw_n/-2) {
                amb_slide.style.left = `${Math.floor(l / base_vw_n) * base_vw_n}vw`
            } else {
                amb_slide.style.left = `${Math.ceil(l / base_vw_n) * base_vw_n}vw`
            }
        }
    }
});

ambient_rb.addEventListener("click", () => {
    rclc_prop()
    if (!isDragging) {
        l = get_amb_slide_vw()
        if (l >= -base_vw_n) {
            amb_slide.style.left = `${l - base_vw_n}vw`
        }
    }
})

ambient_lb.addEventListener("click", () => {
    if (!isDragging) {
        l = get_amb_slide_vw()
        if (l <= -base_vw_n) {
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
