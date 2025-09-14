
const PHONE = "525665207580";
document.addEventListener('DOMContentLoaded',()=>{
  const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});
function openWA(text){
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url,'_blank');
}
function sendForm(e){
  e.preventDefault();
  const s = document.getElementById('service').value;
  const t = document.getElementById('tiraje').value;
  const ta = document.getElementById('tamano').value;
  const a = document.getElementById('acabado').value;
  const u = document.getElementById('urgencia').value;
  const n = document.getElementById('nombre').value.trim();
  const msg = `Hola, quiero cotizar ${s} — ${t} — ${ta} — ${a} — ${u}${n?` — Soy ${n}`:''}`;
  openWA(msg);
}
