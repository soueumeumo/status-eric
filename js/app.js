function buscar(){
const termo=document.getElementById('busca').value.toUpperCase();
db.collection('ordens').onSnapshot(s=>{
let achou=false;
s.forEach(d=>{
const o=d.data();
if(o.os===termo||o.placa===termo){
const dias=Math.floor((new Date()-new Date(o.entrada))/(1000*60*60*24));
resultado.innerHTML=`<p>${o.modelo}</p><p>${o.status}</p><p>${dias} dias</p>`;
achou=true;
}
});
if(!achou)resultado.innerHTML='Não encontrado';
});
}