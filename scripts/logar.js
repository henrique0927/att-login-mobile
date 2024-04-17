var user1 = ['henrique', '12345678']; // nome e senha válidos  
function logar() {
    // verificação nome
    let usuario = document.getElementById('name').value;
    if (usuario === "") {
        document.getElementById('span-usuario').textContent = 'Nome sem dados.';
        document.getElementById('span-usuario').style.display = 'block';
        document.getElementById('span-usuario').style.color = 'red';
    } else {
        document.getElementById('span-usuario').textContent = '';
        document.getElementById('span-usuario').style.display = 'none';
    }

    // verificação senha
    let senha = document.getElementById('password').value;
    if (senha.length <= 8) {
        document.getElementById('span-senha').textContent = 'Senha Inválida. Digite ao menos 8 caracteres.';
        document.getElementById('span-senha').style.display = 'block';
        document.getElementById('span-senha').style.color = 'red';
        console.log(senha.length)
    } else {
        document.getElementById('span-senha').textContent = '';
        document.getElementById('span-senha').style.display = 'none';
    } 
    user1.push([usuario, senha]);
    window.location.href = '../logado.html';
}