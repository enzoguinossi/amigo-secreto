const amigosIncluidos = [];
let amigoDigitado = document.getElementById('nome-amigo').value.trim().toLowerCase();
const campoAmigos = document.getElementById('lista-amigos');

function adicionar() {
    // Padroniza os nomes
    amigoDigitado = document.getElementById('nome-amigo').value.trim().toLowerCase();
    amigoDigitado = amigoDigitado.split(' ').map(palavra =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1)
    ).join(' ');

    // Verifica se algo foi digitado antes de enviar para lsita
    if (amigoDigitado === '') {
        console.error('O nome não pode ser vazio');
        alert('O nome precisa ter pelo menos uma letra.');
        return;
    }
    if (amigosIncluidos.includes(amigoDigitado)) {
        console.error('Não pode adicionar o mesmo nome duas vezes.')
        alert('Você não pode adicionar a mesma pessoas duas vezes');
        return;
    }
    document.getElementById('nome-amigo').value = ''; 
    // Envia para lista
    amigosIncluidos.push(amigoDigitado);
    console.log(amigoDigitado);
    atualizarLista();
}

function embaralharLista() {
    return [...amigosIncluidos].sort(() => Math.random() - 0.5); // Embaralha a lista
}

function sortear() {
    if (amigosIncluidos.length === 0) {
        alert('Você precisa adicionar um número par de nomes para continuar.');
        return;
    }
    if (amigosIncluidos.length % 2 !== 0) {
        alert('Você precisa adicionar um número par de nomes para continuar.');
        return;
    }

    const listaEmbaralhada = embaralharLista();
    const pares = [];

    for (let i = 0; i < listaEmbaralhada.length; i += 2) {
        pares.push(`${listaEmbaralhada[i]} <=> ${listaEmbaralhada[i + 1]}`);
    }

    // Atualiza o campo do sorteio
    const listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = pares.join('<br>'); // Mostra os pares, um por linha
}

function atualizarLista() {
    campoAmigos.innerHTML = amigosIncluidos.join(', '); // Atualiza com os nomes separados por ', '
    }

function reiniciar() {
    document.getElementById('nome-amigo').value = ''; 
    amigosIncluidos.length = 0; //Limpa a array
    atualizarLista();

    // Limpa o campo do sorteio
    const listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';
}

document.getElementById('nome-amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Impede o comportamento padrão do Enter
      adicionar(); // Chama a função adicionar
    }
  });