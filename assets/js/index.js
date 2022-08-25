

////////////////// Animando o scroll /////////////////
const elementosAanimar = document.querySelectorAll(`[data-animacao]`);

elementosAanimar.forEach(e => {
    e.classList.add(`invisivel`);
})


window.addEventListener(`scroll`, () => {

    let alturaScroll = window.scrollY + (window.innerHeight * 3) / 4;
    elementosAanimar.forEach(e => {
        if ((alturaScroll) > (e.offsetTop)) {
            e.classList.add(`animando`);
            return;
        }

        e.classList.remove(`animando`);

    });
})




/////////////// animando o H1 para escrever //////////////////////////

const h1Part1 = document.querySelector(`.h1-part1`);
const h1Part2 = document.querySelector(`.h1-part2`);


function zeraH1() {


    h1Part1.innerHTML = ``
    h1Part2.innerHTML = ``
}


function animaTexto() {
    const arrayLetras2 = h1Part2.innerHTML.split(``);
    const arrayLetras = h1Part1.innerHTML.split(``);  // parametro decide onde divide
    zeraH1();
    arrayLetras.forEach((e, index) => {
        setTimeout(() => {
            h1Part1.innerHTML += e;
        }, 70 * index)
    })
    arrayLetras2.forEach((e, index) => {
        setTimeout(() => {
            h1Part2.innerHTML += e;
        }, 70 * index)
    })
}



animaTexto();







///////////// Respondendo links sem endereco ///////

const linksSem = document.querySelectorAll(`.link-all`);
const divPop = document.querySelector(`.pop`);
const corpo = document.body;
const quitButton = document.querySelector(`.quit`)

linksSem.forEach(e => {
    e.addEventListener(`click`, () => {
        divPop.classList.add(`popAparecendo`);
        quitButton.addEventListener(`click`,()=>{
            divPop.classList.remove(`popAparecendo`);
        })
    })

})


