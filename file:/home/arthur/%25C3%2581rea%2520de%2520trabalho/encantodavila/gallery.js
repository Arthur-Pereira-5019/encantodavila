gallery = document.querySelector("gallery")
ref_2 = document.querySelector("#ref_2")
ref_1 = document.querySelector("#ref_1")
ref_2.classlist.remove("ref")
ref_1.classlist.remove("ref")
lasLine = null
for(i = 1; i < 32; i++) {
    n = ref_1.cloneNode(true)
    n = ref_1.classlist.remove("")
    n.querySelector("img").src="assets/gallery/"+i+".webp"
    if(i % 3 == 1) {
        l = ref_2.cloneNode(true)
        l.appendChild(n)
        gallery.append(l)
        lastline = l
    } else {
        lastline.appendChild(n)
    }
}