function showPlanetaInfo(planetaNombre) {
const planetas = [
    {   nombre: 'Mercurio', 
        descripcion: 'El planeta más pequeño y cercano al Sol.', 
        image: '../assets/image/mercurio.png', 
        stats: ['Temperatura superficial: 430°C (día), -180°C (noche)', 'Diámetro: 4,879 km', 'Distancia al Sol: 57.9 millones km'] },
    {   nombre: 'Venus', 
        descripcion: 'El planeta más caliente del sistema solar.', 
        image: '../assets/image/venus.png', 
        stats: ['Temperatura superficial: 462°C', 'Diámetro: 12,104 km', 'Distancia al Sol: 108.2 millones km'] },
    {   nombre: 'Tierra', 
        descripcion: 'Nuestro hogar, el único planeta conocido con vida.', 
        image: '../assets/image/tierra.png', 
        stats: ['Temperatura superficial: 15°C', 'Diámetro: 12,742 km', 'Distancia al Sol: 149.6 millones km'] },
    {   nombre: 'Marte', 
        descripcion: 'El planeta rojo, objetivo de futuras misiones tripuladas.', 
        image: '../assets/image/marte.png', 
        stats: ['Temperatura superficial: -63°C', 'Diámetro: 6,779 km', 'Distancia al Sol: 227.9 millones km'] },
]



const seleccionPlaneta = planetas.find(planeta => planeta.nombre === planetaNombre);

if (seleccionPlaneta) {
    const infoDiv = document.getElementById('planeta-info');
    infoDiv.innerHTML = `
        <div class="card-planetas">
                <img src="${seleccionPlaneta.image}" alt="${seleccionPlaneta.nombre}">
                <h3>${seleccionPlaneta.nombre}</h3>
                <p>${seleccionPlaneta.descripcion}</p>
                <ul>${seleccionPlaneta.stats.map(stat => `<li>${stat}</li>`).join('')}</ul>
            </div>
    `;
} else {
    console.log("Planeta no encontrado unu");
}

}

document.addEventListener("click",()=>{
    const audio = document.getElementById("musiquita");
    audio.play();
})