const newArray = [];
const agregarElemento = (elemento, callback) => {
  newArray.push(elemento);
  callback();
};

// Function as callback
const mostrarElemento = () => {
  newArray.map((elemento) => console.log(elemento));
};

// Callback Hell example
const iniciarCallbackHell = () => {
  setTimeout(() => {
    agregarElemento("Auto", mostrarElemento);
    setTimeout(() => {
      agregarElemento("Moto", mostrarElemento);
      setTimeout(() => {
        agregarElemento("Avion", mostrarElemento);
        setTimeout(() => {
          agregarElemento("Barco", mostrarElemento);
          setTimeout(() => {
            agregarElemento("Dirigible", mostrarElemento);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

iniciarCallbackHell();