function login(){
auth.signInWithEmailAndPassword(email.value,senha.value)
.then(()=>alert('Logado'))
.catch(e=>alert(e.message));
}

function salvar(){
const data={
os:os.value,
placa:placa.value,
modelo:modelo.value,
status:status.value,
obs:obs.value,
entrada:new Date().toISOString()
};
db.collection('ordens').add(data).then(()=>alert('Salvo'));
}