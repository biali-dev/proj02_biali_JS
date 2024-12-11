const form = document.getElementById('agenda-tel');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`À atividade: ${inputTelContato.value} já foi inserida`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '<td>';
    
        linhas += linha;
    }

        inputNomeContato.value = '';
        inputTelContato.value = '';
}

function atualizaTabela()  {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}