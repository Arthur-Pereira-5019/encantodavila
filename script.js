body = document.querySelector("body")
header = document.querySelector("#header")
amb_slide = document.querySelector("#amb_slide")
ambient_rb = document.querySelector("#ambient_rb")
ambient_lb = document.querySelector("#ambient_lb")

whatsb = document.querySelector("#whats")
whatsb.addEventListener('click', function(event) {
    window.location.href = "https://wa.me/5547920008202?text=Mensagem%20enviada%20pelo%20site"
})

window.addEventListener("scroll",function(event) {
    if(window.scrollY > 100) {
        header.dataset.transparent = "0"
    } else {
        header.dataset.transparent = "1"
    }
})

let isDragging = false;
let offsetX, offsetY;

amb_slide.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX  - amb_slide.offsetLeft;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    amb_slide.style.left = `${e.clientX - offsetX}px`;
});

document.addEventListener('mouseup', () => {
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
        l = pxToVh(l)
    return l
}

function get_amb_slide_vw() {
    let l = amb_slide.style.left
        l = l.slice(0,l.length-2)
    return l
}

function pxToVh(px) {
    const viewportHeight = window.innerHeight;
    return (px * 100) / viewportHeight;
}
