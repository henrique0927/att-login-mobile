var user1 = ['henrique', '12345678']; // nome e senha válidos  

function logar() {
    // verificação nome
    let usuario = document.getElementById('name').value;
    if (usuario === "") {
        document.getElementById('span-usuario').textContent = 'Nome sem dados.';
        document.getElementById('span-usuario').style.display = 'block';
        document.getElementById('span-usuario').style.color = 'red';
        return; // Impede a continuação do processo se o nome estiver em branco
    } else {
        document.getElementById('span-usuario').textContent = '';
        document.getElementById('span-usuario').style.display = 'none';
    }

    // verificação senha
    let senha = document.getElementById('password').value;
    if (senha.length < 8) {
        document.getElementById('span-senha').textContent = 'Senha Inválida. Digite ao menos 8 caracteres.';
        document.getElementById('span-senha').style.display = 'block';
        document.getElementById('span-senha').style.color = 'red';
        return; // Impede a continuação do processo se a senha for muito curta
    } else {
        document.getElementById('span-senha').textContent = '';
        document.getElementById('span-senha').style.display = 'none';
    }

    // Verifica se o nome de usuário e a senha correspondem aos valores válidos
    if (usuario === user1[0] && senha === user1[1]) {
        // Redireciona para a página logado se os dados estiverem corretos
        window.location.href = 'logado.html';
    } else {
        // Exibe uma mensagem de erro se os dados estiverem incorretos
        document.getElementById('span-login').textContent = 'Nome de Usuário ou Senha Incorreto.';
        document.getElementById('span-login').style.display = 'block';
        document.getElementById('span-login').style.color = 'red';
        return; // Impede a continuação do processo se a senha for muito curta
    }
}
