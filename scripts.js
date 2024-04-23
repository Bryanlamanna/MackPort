const urlMack = "https://portfolio-1184f-default-rtdb.firebaseio.com/mackenzie";

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    sendData();
})

 
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


