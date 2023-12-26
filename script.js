//console.log("Hello World");
const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('parrafito');
//const pid = document.getElementById('pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputsValues);

//btn.addEventListener('click', btnOnClick);
/*console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

//h1.innerHTML='patito';
//h1.innerText='patito <br>';
//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value="123";

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);

pid.innerHTML = "";
pid.append(img);
*/

function sumarInputsValues(event){
    //console.log({event});
    event.preventDefault();
    //console.log('escuchando el evento de click');
    //console.log(input1.value + input2.value);
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}