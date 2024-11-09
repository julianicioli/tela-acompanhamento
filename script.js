function adicionarAluno() {
    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const status = document.getElementById('status').value;

    if (nome && curso) {
        const statusContainer = document.getElementById('status-container');
        const professorDiv = document.createElement('div');
        professorDiv.classList.add('status');
        
        professorDiv.innerHTML = professorHTML;
        statusContainer.appendChild(professorDiv);

        document.getElementById('nome').value = '';
        document.getElementById('curso').value = '';
        document.getElementById('status').value = 'Aprovado';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
