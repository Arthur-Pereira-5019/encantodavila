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
    n.addEventListener("click", function () {
        expandImage(3, i-1)
    })
    gallery.appendChild(n)
}

gallery_see.addEventListener("click",function() {
    show = !show
    p = show ? "block" : "none"
    for(i = 6; i < 32; i++) {
        gallery.querySelector("#gallery_"+i).style.display = p
    }
})