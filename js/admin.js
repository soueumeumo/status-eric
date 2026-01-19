let usuarioLogado = false;

// Verifica login
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    usuarioLogado = true;
  } else {
    usuarioLogado = false;
    alert("Faça login para acessar o painel");
  }
});

function login() {
  auth.signInWithEmailAndPassword(email.value, senha.value)
    .then(() => alert("Login realizado"))
    .catch(err => alert(err.message));
}

function salvar() {
  if (!usuarioLogado) {
    alert("Você precisa estar logado para salvar a OS");
    return;
  }

  if (!os.value || !placa.value) {
    alert("OS e Placa são obrigatórios");
    return;
  }

  const dados = {
    os: os.value.toUpperCase(),
    placa: placa.value.toUpperCase(),
    modelo: modelo.value,
    status: status.value,
    obs: obs.value,
    entrada: new Date().toISOString()
  };

  // 🔑 Salva usando a OS como ID (sem duplicar)
  db.collection("ordens")
    .doc(dados.os)
    .set(dados)
    .then(() => {
      alert("OS salva com sucesso");
    })
    .catch(err => {
      console.error(err);
      alert("Erro ao salvar OS: " + err.message);
    });
}
