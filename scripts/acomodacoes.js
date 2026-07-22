ac_tripla_card_imgs = document.querySelector("#ac_tripla_card_imgs")
ac_slide_tripla = document.querySelector("#ac_slide_tripla")
ac_tripla_lb = document.querySelector("#ac_tripla_lb")
ac_tripla_rb = document.querySelector("#ac_tripla_rb")

ac_quadrupla_card_imgs = document.querySelector("#ac_quadrupla_card_imgs")
ac_slide_quadrupla = document.querySelector("#ac_slide_quadrupla")
ac_quadrupla_lb = document.querySelector("#ac_quadrupla_lb")
ac_quadrupla_rb = document.querySelector("#ac_quadrupla_rb")

ac_selector_0 - document.querySelector("#ac_selector_0")
ac_selector_1 - document.querySelector("#ac_selector_1")
acomodacoes_card_slide - document.querySelector("#acomodacoes_card_slide")

ac_card_dess = document.querySelector(".ac_card_dess")
ac_cards = document.querySelector(".ac_cards")

ac_img_base = document.createElement("img")
ac_imgs = document.querySelectorAll(".ac_img")
ac_img_ball = document.createElement("div")

ac_img_base.classList.add("ac_img")
ac_img_ball.classList.add("ind_ball")

ac_card_lower_box = document.querySelector(".ac_card_lower_box")
ac_card_apds = document.querySelectorAll(".ac_card_apd")

let act_i = 0
let acq_i = 0

reset_acomodacoes()
for (i = 0; i < 21; i++) {
    let nn = ac_img_base.cloneNode(true)
    let nb = ac_img_ball.cloneNode(true)
    nb.id = "ball_tripla_" + i

    nn.src = "assets/suite_tripla/suite_tripla_" + i + ".jpg"
    ac_slide_tripla.appendChild(nn)
    ac_tripla_ind.appendChild(nb)
    ac_imgs = document.querySelectorAll(".ac_img")
}

for (i = 0; i < 16; i++) {
    let nn = ac_img_base.cloneNode(true)
    let nb = ac_img_ball.cloneNode(true)
    nb.id = "ball_quad_" + i

    nn.src = "assets/suite_quadrupla/suite_quad_" + i + ".jpg"
    ac_slide_quadrupla.appendChild(nn)
    ac_quadrupla_ind.appendChild(nb)
    ac_imgs = document.querySelectorAll(".ac_img")
}
reset_acomodacoes()

async function reset_acomodacoes() {
    ac_cd_px = window.getComputedStyle(ac_card_dess).height
    ac_card_h = Math.ceil(pxToVw(Number(ac_cd_px.slice(0, ac_cd_px.length - 2)))) + "vw"
    ac_tripla_card_imgs.style.height = ac_card_h
    ac_cards_px = window.getComputedStyle(ac_cards).width
    ac_cards_vw = Math.ceil(pxToVw(Number(ac_cards_px.slice(0, ac_cards_px.length - 2))))
    ac_tripla_pos()

    ac_quadrupla_card_imgs.style.height = ac_card_h
    ac_quadrupla_pos()
    acomodacoes_card_slide.style.left = "0"

    apd_height = window.getComputedStyle(ac_card_lower_box).height
    apd_height = Number(apd_height.slice(0, apd_height.length - 2))

    ac_imgs.forEach(e => {
        e.style.width = ac_cards_vw + "vw"
    })

    ac_card_apds.forEach(e => {
        e.style.bottom = apd_height + "px"
    });

    ac_slide_tripla.style.width = (21*ac_cards_vw)+"vw"
    ac_slide_quadrupla.style.width = (16*ac_cards_vw)+"vw"
}

ac_selector_0.addEventListener("click",function() {
    if(ac_selector_0.dataset.selected == "0") {
        ac_selector_0.dataset.selected = "1"
        ac_selector_1.dataset.selected = "0"
        acomodacoes_card_slide.style.left = "3vw"
    }
})

function ac_tripla_pos() {
    ac_slide_tripla.style.left = (ac_cards_vw * act_i) + "vw"
    ac_tripla_highlight()
}

function ac_quadrupla_pos() {
    ac_slide_quadrupla.style.left = (ac_cards_vw * acq_i) + "vw"
    ac_quadrupla_highlight()
}

ac_selector_1.addEventListener("click",function() {
    if(ac_selector_1.dataset.selected == "0") {
        ac_selector_0.dataset.selected = "0"
        ac_selector_1.dataset.selected = "1"
        acomodacoes_card_slide.style.left = "-68vw"
    }
})

ac_tripla_lb.addEventListener("click", function () {
    if (act_i >= 0) {
        act_i = -20
    } else {
        act_i++
    }
    ac_tripla_pos()
})

ac_tripla_rb.addEventListener("click", function () {
    if (act_i <= -20) {
        act_i = 0
    } else {
        act_i--;
    }
    ac_tripla_pos()
})

ac_quadrupla_lb.addEventListener("click", function () {
    if (acq_i >= 0) {
        acq_i = -15
    } else {
        acq_i++
    }
    ac_quadrupla_pos()
})

ac_quadrupla_rb.addEventListener("click", function () {
    if (acq_i >= -15) {
        acq_i = 0
    } else {
        acq_i--
    }
    ac_quadrupla_pos()
})

function ac_tripla_highlight() {
    for (i = 0; i < 21; i++) {
        document.querySelector("#ball_tripla_" + i).dataset.selected = "0"
    }
    document.querySelector("#ball_tripla_" + Math.abs(act_i)).dataset.selected = "1"
}

function ac_quadrupla_highlight() {
    for (i = 0; i < 16; i++) {
        document.querySelector("#ball_quad_" + i).dataset.selected = "0"
    }
    const nball = Math.ceil(Math.abs(calc_ac_q_l() / ac_cards_vw))
    document.querySelector("#ball_quad_" + nball).dataset.selected = "1"
}

function calc_ac_t_l() {
    let l = ac_slide_tripla.style.left
    l = l.slice(0, l.length - 2)
    return Number(l)
}

function calc_ac_q_l() {
    let l = ac_slide_quadrupla.style.left
    l = l.slice(0, l.length - 2)
    return Number(l)
}