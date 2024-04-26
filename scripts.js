const urlMack = "https://portfolio-1184f-default-rtdb.firebaseio.com/mackenzie";
const actions = ["Desenvolvo ", "Crio "];
const things = ["Ideias ", "Soluções "];
const stacks = ["Java ", "Spring ", "MySQL ", "JavaScript ", "Bootstrap ", "HTML ", "CSS ", "Firebase", "IA "];
const leftText = document.querySelector(".left-text");
const rightText = document.querySelector(".right-text");
const techText = document.querySelector(".tech-text");

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendData();
})

$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

function sendData() {

    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("mensagem").value;

    const data = {
        name: name,
        email: email,
        message: message
    }
    fetch(`${urlMack}.json`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert("Mensagem enviada com sucesso!");
        document.querySelector("form").reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
    })

}


