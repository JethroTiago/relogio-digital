const elementoHora = document.querySelector("#hora");
const elementoMinuto = document.querySelector("#minutos");
const elementoSegundo = document.querySelector("#segundos");
const elementoAmPm = document.querySelector("#ampm");

function atualizaRelogio() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if(h > 12) {
        h = h - 12;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h; //Faz aparecer um numero 0 se o numero for menor que 10
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    elementoHora.innerText = h;
    elementoMinuto.innerText = m;
    elementoSegundo.innerText = s;
    elementoAmPm.innerText = ampm;
    setTimeout(() => {
        atualizaRelogio();
    }, 1000)

}

atualizaRelogio();