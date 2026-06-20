ac_tripla_card_imgs = document.querySelector("#ac_tripla_card_imgs")
ac_slide_tripla = document.querySelector("#ac_slide_tripla")
ac_tripla_lb = document.querySelector("#ac_tripla_lb")
ac_card_dess = document.querySelector(".ac_card_dess")
ac_cards = document.querySelector(".ac_cards")

ac_cards_px = window.getComputedStyle(ac_cards).width

ac_cd_px = window.getComputedStyle(ac_card_dess).height
ac_card_h = Math.ceil(pxToVw(Number(ac_cd_px.slice(0, ac_cd_px.length - 2)))) + "vw"
ac_tripla_card_imgs.style.height = ac_card_h

ac_img_base = document.createElement("img")
ac_img_ball = document.createElement("div")

ac_img_base.classList.add("ac_img")
ac_img_ball.classList.add("ind_ball")
for (i = 0; i < 22; i++) {
    let nn = ac_img_base.cloneNode(true)
    let nb = ac_img_ball.cloneNode(true)
    nb.id = "ball_tripla_"+i

    nn.src = "assets/suite_tripla/suite_tripla_" + i + ".jpg"
    ac_slide_tripla.appendChild(nn)
    ac_tripla_ind.appendChild(nb)
}

function reset_acomodacoes() {
    ac_cd_px = window.getComputedStyle(ac_card_dess).height
    ac_card_h = Math.ceil(pxToVw(Number(ac_cd_px.slice(0, ac_cd_px.length - 2)))) + "vw"
    ac_tripla_card_imgs.style.height = ac_card_h
}

ac_tripla_lb.addEventListener("click",function() {
    ac_slide_tripla.left
}
