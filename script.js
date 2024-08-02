const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
canvas.addEventListener("mousemove", calcAngleDegrees);

function calcAngleDegrees(e) {
    // Obtenez les coordonnées du clic par rapport au canvas
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left - canvas.width / 2;
    const y = canvas.height / 2 - (e.clientY - rect.top); // Inverse y pour avoir y positif vers le haut

    // Calculez l'angle en radians
    const radians = Math.atan2(y, x);

    // Convertissez en degrés
    let degrees = (radians * 180) / Math.PI;

    // Ajustez l'angle pour qu'il soit dans la plage [-90, 90]
    if (degrees > 90) {
        degrees -= 360;
    }

    console.log(degrees);
}
