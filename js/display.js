db.collection('ordens').onSnapshot(s=>{
lista.innerHTML='';
s.forEach(d=>{
const o=d.data();
const dias=Math.floor((new Date()-new Date(o.entrada))/(1000*60*60*24));
const c=document.createElement('div');
c.className='card status-'+o.status.replace(' ','\\ ');
c.innerHTML=`<b>${o.modelo}</b><br>Placa: ${o.placa}<br>Status: ${o.status}<br>⏱️ ${dias} dias`;
lista.appendChild(c);
});
});