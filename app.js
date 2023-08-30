const img = document.querySelector("img")
const para = document.querySelector("p")
const math = Math.ceil(Math.random()*2)

function masjid(params) {
    if (math === "") {
        // console.log(math);
    img.src = "./assets/masjid.png"
    para.innerHTML= "You won the toss"
    } else {
        img.src = ""
        para.innerHTML= "You loss the toss"
    }
}
function chand(params) {
    if (math === " ") {
        img.src = ""
    para.innerHTML= "You loss the toss"
}else {
    img.src = "./assets/chand.png"
    para.innerHTML= "You won the toss"
 }
 }