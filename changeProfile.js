// URL de la imagen y del endpoint
const imageUrl = "https://chl-6c3dc4ac-bf42-4e03-89dc-2738fb1128f7-blog-hacklab.softwareseguro.com.ar/static/uploads/c8de112658e95ba9.jpg";
const postUrl = "https://chl-6c3dc4ac-bf42-4e03-89dc-2738fb1128f7-blog-hacklab.softwareseguro.com.ar/profile";

// Función para enviar la imagen
async function uploadImage() {
  try {
    // Descargar la imagen
    const imgResponse = await fetch(imageUrl);
    const imgBlob = await imgResponse.blob();

    // Crear FormData
    const formData = new FormData();
    formData.append("image", imgBlob, "profile.jpg"); // "image" depende del formulario

    // Si hay otros campos
    formData.append("username", "usuario_de_prueba");

    // Enviar POST
    const response = await fetch(postUrl, {
      method: "POST",
      body: formData,
      // headers: Si necesitas cookies o token, agregar acá
      // credentials: 'include'  // si necesitas enviar cookies de sesión
    });

    const result = await response.text();
    console.log("Status:", response.status);
    console.log("Response:", result);
  } catch (err) {
    console.error(err);
  }
}

uploadImage();
