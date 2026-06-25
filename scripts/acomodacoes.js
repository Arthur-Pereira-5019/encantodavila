ac_tripla_card_imgs = document.querySelector("#ac_tripla_card_imgs")
ac_slide_tripla = document.querySelector("#ac_slide_tripla")
ac_tripla_lb = document.querySelector("#ac_tripla_lb")
ac_tripla_rb = document.querySelector("#ac_tripla_rb")

ac_quadrupla_card_imgs = document.querySelector("#ac_quadrupla_card_imgs")
ac_slide_quadrupla = document.querySelector("#ac_slide_quadrupla")
ac_quadrupla_lb = document.querySelector("#ac_quadrupla_lb")
ac_quadrupla_rb = document.querySelector("#ac_quadrupla_rb")



ac_card_dess = document.querySelector(".ac_card_dess")
ac_cards = document.querySelector(".ac_cards")

ac_img_base = document.createElement("img")
ac_img_ball = document.createElement("div")

ac_img_base.classList.add("ac_img")
ac_img_ball.classList.add("ind_ball")

reset_acomodacoes()
for (i = 0; i < 21; i++) {
    let nn = ac_img_base.cloneNode(true)
    let nb = ac_img_ball.cloneNode(true)
    nb.id = "ball_tripla_"+i

    nn.src = "assets/suite_tripla/suite_tripla_" + i + ".jpg"
    ac_slide_tripla.appendChild(nn)
    ac_tripla_ind.appendChild(nb)
}

for (i = 0; i < 16; i++) {
    let nn = ac_img_base.cloneNode(true)
    let nb = ac_img_ball.cloneNode(true)
    nb.id = "ball_quad_"+i

    nn.src = "assets/suite_quadrupla/suite_quad_" + i + ".jpg"
    ac_slide_quadrupla.appendChild(nn)
    ac_quadrupla_ind.appendChild(nb)
}
reset_acomodacoes()

async function reset_acomodacoes() {
    ac_cd_px = window.getComputedStyle(ac_card_dess).height
    ac_card_h = Math.ceil(pxToVw(Number(ac_cd_px.slice(0, ac_cd_px.length - 2)))) + "vw"
    ac_tripla_card_imgs.style.height = ac_card_h
    ac_cards_px = window.getComputedStyle(ac_cards).width
    ac_cards_vw = Math.floor(pxToVw(Number(ac_cards_px.slice(0, ac_cards_px.length - 2))))
    ac_tripla_highlight()
    
    ac_quadrupla_card_imgs.style.height = ac_card_h
    ac_quadrupla_highlight()
}

ac_tripla_lb.addEventListener("click",function() {
    ac_tripla_fix()
    if(calc_ac_t_l() >= 0) {
        ac_slide_tripla.style.left = (-20*ac_cards_vw)+ "vw"
    }else {
        ac_slide_tripla.style.left = (calc_ac_t_l()+ac_cards_vw)+ "vw"
    }
    ac_tripla_highlight()
})

ac_tripla_rb.addEventListener("click",function() {
    ac_tripla_fix()
    if(calc_ac_t_l() <= -20*ac_cards_vw) {
        ac_slide_tripla.style.left = "0vw"
    }else {
        ac_slide_tripla.style.left = (calc_ac_t_l()-ac_cards_vw)+ "vw"
    }
    ac_tripla_highlight()
})

function ac_tripla_fix() {
    if(calc_ac_t_l() % ac_cards_vw != 0) {
        ac_slide_tripla.style.left = calc_ac_t_l() - calc_ac_t_l()%ac_cards_vw
    }
}

ac_quadrupla_lb.addEventListener("click",function() {
    if(calc_ac_q_l() >= 0) {
        ac_slide_quadrupla.style.left = (-15*ac_cards_vw)+ "vw"
    }else {
        ac_slide_quadrupla.style.left = (calc_ac_q_l()+ac_cards_vw)+ "vw"
    }
    ac_quadrupla_highlight()
})

ac_quadrupla_rb.addEventListener("click",function() {
    if(calc_ac_q_l() <= -15*ac_cards_vw) {
        ac_slide_quadrupla.style.left = "0vw"
    }else {
        ac_slide_quadrupla.style.left = (calc_ac_q_l()-ac_cards_vw)+ "vw"
    }
    ac_quadrupla_highlight()
})

function ac_tripla_highlight() {
    for(i = 0; i < 21;i++) {
        document.querySelector("#ball_tripla_"+i).dataset.selected = "0"
    }
    const nball = Math.ceil(Math.abs(calc_ac_t_l()/ac_cards_vw))
    document.querySelector("#ball_tripla_"+nball).dataset.selected = "1"
}

function ac_quadrupla_highlight() {
    for(i = 0; i < 16;i++) {
        document.querySelector("#ball_quad_"+i).dataset.selected = "0"
    }
    const nball = Math.ceil(Math.abs(calc_ac_q_l()/ac_cards_vw))
    document.querySelector("#ball_quad_"+nball).dataset.selected = "1"
}

function calc_ac_t_l() {
    let l = window.getComputedStyle(ac_slide_tripla).left
    l = l.slice(0,l.length-2)
    return Math.ceil(pxToVw(Number(l)))
}

function calc_ac_q_l() {
    let l = window.getComputedStyle(ac_slide_quadrupla).left
    l = l.slice(0,l.length-2)
    return Math.ceil(pxToVw(Number(l)))
}