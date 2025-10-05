// browser-post-comment.js
async function postCommentBrowser() {
  const url = 'https://chl-2fa52546-3adb-4123-a1a8-c97120a69880-blog-hacklab-v2.softwareseguro.com.ar/comment';

  // Formato x-www-form-urlencoded
  const body = new URLSearchParams({
    content: 'hola hola'
  });

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
      },
      body: body.toString(), // o body (URLSearchParams) directamente
      credentials: 'include' // envía cookies del origen (si el navegador las tiene)
    });

    const text = await resp.text();
    console.log('Status:', resp.status);
    console.log('Response body:', text);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

postCommentBrowser();
