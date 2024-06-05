
const firebaseConfig = {
  apiKey: "AIzaSyDxW94LqLhEBSvy2RYlS0_8eNPC_Pp1pSI",
  authDomain: "twiterdashopee.firebaseapp.com",
  projectId: "twiterdashopee",
  storageBucket: "twiterdashopee.appspot.com",
  messagingSenderId: "93949907379",
  appId: "1:93949907379:web:e4cfdd2ca96bbf013c3bc6",
  measurementId: "G-00GYCW5L55"
};

firebase.initializeApp(firebaseConfig);

inicializar();


function inicializar() {
   const nomeUsuario = localStorage.getItem("nomeUsuario");
   // console.log(nomeUsuario);
   document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";


   getData();
}


function addSala() {
   const nomeSala = document.getElementById("nomeSala").value;
   console.log(nomeSala);
   if (nomeSala) {
       firebase.database().ref('/').child(nomeSala).set({
            // '/'--> significa acessar a raiz do meu firebase, que é uma barra,é topo da estrutura de dados do meu Firebase, usamos para add o nome de usuario do BD ;
           purpose: "sala criada"
       });


       carregaSala(nomeSala);
   }
}


function getData() {
   firebase.database().ref('/').on("value", snapshot => {
       let salas = [];
       snapshot.forEach(childSnapshot => {
           const childKey = childSnapshot.key;
           const html = '<div class="nomeSala" id="'
               + childKey
               + '" onclick="carregaSala(this.id)">#'
               + childKey
               + '</div>'
           salas.push(html);
       });
       document.getElementById("output").innerHTML = salas.join("");
       // const output = document.getElementById("output");
       // output.innerHTML = salas.join("");
   });
}


function carregaSala(sala) {
   localStorage.setItem("nomeSala", sala);
   location = "chat.html";
}


