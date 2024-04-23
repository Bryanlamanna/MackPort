const url = "https://portfolio-1184f-default-rtdb.firebaseio.com/mackenzie.json";

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

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {

        alert("Mensagem enviada com sucesso!");
        console.log("Success:", data);
        location.reload();
    })

}
