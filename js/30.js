const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () => {
  console.log("desde consultarAPI");
  fetch(url)
    .then((respuesta) => {
      console.log("desde el primer then");
      console.log("respuesta", respuesta);
      return respuesta.json();
    })
    .then((resultado) => {
      console.log("resultado", resultado);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Todo listo"));
};

consultarAPI();
