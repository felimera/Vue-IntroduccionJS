const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
  console.log("desde consultarAPI");
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log("resultado", resultado);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("Todo listo");
  }
};

consultarAPI();
