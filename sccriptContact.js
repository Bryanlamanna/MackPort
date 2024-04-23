const url = "https://portfolio-1184f-default-rtdb.firebaseio.com/mackenzie.json";


document.addEventListener("DOMContentLoaded", function () {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            fillCards(data);
        })
    

    // Preencher os cards com os dados do servidor
    function fillCards(data) {
        const cardsContainer = document.getElementById('cards');
        cardsContainer.innerHTML = '';
        console.log(data);

        // Loop para preencher os cards
        for (const item of data) {
            const card = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
                        <p class="card-text">${item.message}</p>
                    </div>
                </div>
            </div>`;
            cardsContainer.insertAdjacentHTML('beforeend', card);
        }
        
        /*data.forEach(item => {
            const card = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
                        <p class="card-text">${item.message}</p>
                    </div>
                </div>
            </div>`;
            cardsContainer.insertAdjacentHTML('beforeend', card);
        });*/
    }

    
});