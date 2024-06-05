function addUser() {
  const nomeUsuario = document.getElementById("nomeUsuario").value;
console.log(nomeUsuario);
if(nomeUsuario) {
  localStorage.setItem("nomeUsuario", nomeUsuario);
  window.location = "sala.html"
}
}