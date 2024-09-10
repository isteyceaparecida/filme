const apiUrl = 'http://www.omdbapi.com/';
const apiKey = '7add4d7';

const btnBuscar = document.getElementById('BuscarFilme');
btnBuscar.addEventListener('click', (e) => {
    const titulo = document.getElementById('titulo').value;
    e.preventDefault();
    fetch(`${apiUrl}?t=${titulo}&apikey=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro na requisição: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('ano').textContent = `${data.Year}`;
            document.getElementById('genero').textContent = `${data.Genre}`;
            document.getElementById('duracao').textContent = `${data.Runtime}`;
            document.getElementById('poster').src = data.Poster;
        });
    });

