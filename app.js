let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = "";
    atualizarListaAmigos();

    document.getElementById('contador').textContent = `Nomes adicionados: ${amigos.length}`;
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = "X";
        botaoRemover.classList.add('botao-remover');
        botaoRemover.onclick = function() {
            amigos.splice(i, 1);
            atualizarListaAmigos();
            document.getElementById('contador').textContent = `Nomes adicionados: ${amigos.length}`;
        };

        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    createjs.Sound.play("confetti");
}

createjs.Sound.registerSound("https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3", "confetti");

document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});