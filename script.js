// Botones: compartir en WhatsApp y copiar enlace
const shareBtn = document.getElementById('shareBtn');
const copyBtn = document.getElementById('copyBtn');

function getShareURL(){
  // Si la página está en internet, comparte la URL actual.
  // Si estás probando en local, reemplaza manualmente por la URL pública después del deploy.
  return window.location.href;
}

shareBtn.addEventListener('click', () => {
  const url = getShareURL();
  const text = `Te hice esto especialmente para ti 💛\nMíralo aquí: ${url}`;
  const wa = `https://wa.me/?text=${encodeURIComponent(text)}`;
  // Abrir en nueva pestaña
  window.open(wa, '_blank');
});

copyBtn.addEventListener('click', async () => {
  const url = getShareURL();
  try{
    await navigator.clipboard.writeText(url);
    copyBtn.textContent = 'Enlace copiado ✅';
    setTimeout(()=> copyBtn.textContent = 'Copiar enlace', 1800);
  }catch(e){
    alert('No se pudo copiar automáticamente. Selecciona y copia manualmente: ' + url);
  }
});
