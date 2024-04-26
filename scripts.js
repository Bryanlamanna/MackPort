const urlMack = "https://portfolio-1184f-default-rtdb.firebaseio.com/mackenzie";
const actions = ["Desenvolvo ", "Crio "];
const things = ["ideias ", "soluções "];
const stacks = ["Spring", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS", "Firebase", "IA", "Java"];
const leftText = document.querySelector(".text-left");
const rightText = document.querySelector(".text-right");
const techText = document.querySelector(".tech-text");
let index1 = 0;
let index2 = 0;
let index3 = 0; 

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

function changeStack() {
    
    techText.style.opacity = 0;
    setTimeout(() => {
        techText.innerHTML = stacks[index1];
        techText.style.opacity = 1;
        index1 = (index1 + 1) % stacks.length;
    }, 500)
   

}

function changeLeftText() {
    
    leftText.style.opacity = 0;
    setTimeout(() => {
        leftText.innerHTML = actions[index2];
        leftText.style.opacity = 1;
        index2 = (index2 + 1) % actions.length;
    }, 500)

}

function changeRightText() {

    rightText.style.opacity = 0;
    setTimeout(() => {
        rightText.innerHTML = things[index3];
        rightText.style.opacity = 1;
        index3 = (index3 + 1) % things.length;
    }, 500)
}

setInterval(changeStack, 3000);
setInterval(changeLeftText, 6000);
setInterval(changeRightText, 9000);
