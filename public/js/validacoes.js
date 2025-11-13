function mostrarSenha() {
    var senha = ipt_senha;

    if (senha.type == 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }
}

