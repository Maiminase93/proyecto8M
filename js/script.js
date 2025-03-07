// FOTOS MUJERES SUPERIOREs Seleccion de las formas div superiores
// Seleccion Array
let avatars = document.querySelectorAll('#avatares>div');

// DIV en relacion con la foto superior
// Seleccion Array
let mujeres = document.querySelectorAll('.mujer');


// Linea temporal
let anio = document.querySelector('#lineaTempo'); 
let valorActual = anio.value;

// console.log(avatars);
// console.log(mujeres);

// Atribuir CSS directo en HTML
mujeres.forEach((mujer) =>{
    mujer.style.opacity = '0';
    mujer.style.display = 'none';
    mujer.style.transition = 'all 1s ease'
});

// Mostrar/Ocultar informacion mujer
avatars.forEach((avatar, indice) =>{
    avatar.addEventListener('click', ()=>{
        // console.log(avatar);
        for(let i = 0; i < mujeres.length; i++){
            mujeres[i].style.display = 'none';
            mujeres[i].style.opacity = '0';
            mujeres[i].style.transition = 'all 1s ease';
            avatars[i].style.zIndex = '1';
            
        }
        avatar.style.zIndex = '5';

        mujeres[indice].style.display = 'block';
        mujeres[indice].style.opacity = '100';
        mujeres[indice].style.transition = 'all 1s ease';



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
        moverP();
    });
});

let parrafo = document.querySelector('.slidecontainer > p');
parrafo.style.visibility = 'hidden';


// Función para mover el parrafo de forma suave
function moverP() {
    const ANIOVALUE = anio.value;
    const sliderWidth = anio.max - anio.min; // Ancho del rango del slider
    const valuePercentage = (ANIOVALUE - anio.min) / sliderWidth; // Obtenemos el porcentaje del valor
    const percentageP = valuePercentage * 100 * 0.98;
    // parrafo.style.left = `${valuePercentage * 100}%`; // Aplicamos el translateX
    parrafo.style.left = `${percentageP}%`; // Aplicamos el translateX
    
    parrafo.textContent = ANIOVALUE;
    parrafo.style.visibility = 'visible';
}