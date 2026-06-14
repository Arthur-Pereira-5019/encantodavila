footer_phone = document.querySelector("#footer_phone")

footer_mail = document.querySelector("#footer_mail")
footer_location = document.querySelector("#footer_location")

footer_mail.addEventListener("click", function () {
    window.location = "mailto:encantodavilapousada@gmail.com?subject=Gostaria%20de%20falar%20com%a%pousada";
})

footer_location.addEventListener("click", function () {
    let lat = "-26.9159141"
    let lng = "-49.0865473"
    let label = "Encanto da Vila"

    if (isIOS) {
        window.location.href = `maps://maps.apple.com/?q=${encodeURIComponent(label)}&ll=${lat},${lng}`;
    } else if (isAndroid) {
        window.location.href = `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(label)})`;
    } else {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    }
})