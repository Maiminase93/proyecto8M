// FOTOS MUJERES SUPERIOREs Seleccion de las formas div superiores
// Seleccion Array
let avatars = document.querySelectorAll('#avatares>div');

// DIV en relacion con la foto superior
// Seleccion Array
let mujeres = document.querySelectorAll('.mujer');


// Linea temporal
let anio = document.querySelector('#lineaTempo');
let dibu = document.querySelector('#timeTempo');
let valorActual = anio.value;

// console.log(avatars);
// console.log(mujeres);

// Atribuir CSS directo en HTML
mujeres.forEach((mujer) =>{
    mujer.style.display = 'none';
});

// Mostrar/Ocultar informacion mujer
avatars.forEach((avatar, indice) =>{
    avatar.addEventListener('click', ()=>{
        // console.log(avatar);
        for(let i = 0; i < mujeres.length; i++){
            mujeres[i].style.display = 'none';
            avatars[i].style.zIndex = '1';
        }
        avatar.style.zIndex = '5';

        mujeres[indice].style.display = 'block';


    });
});

// Movimiento linea temporal
avatars.forEach((any) =>{
    any.addEventListener('click', ()=>{
        // Obtenemos el valor de la clase
        const ANIODIV = any.getAttribute('class');
        
        // Actualizamos el valor del slider
        anio.value = ANIODIV;

        // Movemos el slider con una transicion suave
        moverSlider();
    });
});

// Función para mover el slider de forma suave
function moverSlider() {

    const ANIOVALUE = anio.value;
    const sliderWidth = anio.max - anio.min; // Ancho del rango del slider
    const valuePercentage = (ANIOVALUE - anio.min) / sliderWidth;
     // Obtenemos el porcentaje del valor
    dibu.style.transform = `translateX(${valuePercentage * 5500}%)`; // Aplicamos el translateX
}
