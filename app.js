const contratarJugador = new Promise ((resolve, reject) => {
    const contratado = false;
    if(contratado) resolve('El jugador se incorpora al equipo');
    else reject('El jugador y el equipo no llegaron a un acuerdo');
})

const mensaje = (result) => {
    console.log(`Mensaje: ${result}`);
}

contratarJugador
    .then((message) => mensaje(message))
    .catch((error) => mensaje(error));