show = false
gallery = document.querySelector("#gallery")
gallery_see = document.querySelector("#gallery_see")
ref_2 = document.querySelector("#ref_2").cloneNode(true)
ref_1 = document.querySelector("#ref_1").cloneNode(true)
ref_2.classList.remove("ref")
ref_1.classList.remove("ref")
for(let i = 1; i < 32; i++) {
    n = ref_2.cloneNode(true)
    n.id = "gallery_"+i
    n.querySelector("img").src="assets/gallery/"+i+".webp"
    n.querySelector("img").dataset.img_group_order= String(i-1)
    if(i >= 7) {
        n.style.display = "none"
    }
    n.addEventListener("click", function () {
        expandImage(3, i-1)
    })
    gallery.appendChild(n)
}

gallery_see.addEventListener("click",function() {
    gallery_see.textContent = "Ver mais"
    p = "none"
    show = !show
    if(show) {
        gallery_see.textContent = "Ver menos"
        p = "block"
    }
    for(i = 7; i < 32; i++) {
        gallery.querySelector("#gallery_"+i).style.display = p
    }
})