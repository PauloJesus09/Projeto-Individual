// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "login.html";
}

function limparErro(campoInput) {
    if (campoInput == 'nome') {
        msgNome.innerHTML = "";
        ipt_nome.style.border = `1px solid #ccc`;
    } 
    if (campoInput == 'email') {
        msgEmail.innerHTML = "";
        ipt_email.style.border = `1px solid #ccc`;
    } 
    if (campoInput == 'senha') {
        msgSenha.innerHTML = "";
        ipt_senha.style.border = `1px solid #ccc`;
    }
}
function finalizarAguardar(texto) {
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";
    
    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    // if (finalizarAguardar == true) {
    //     setTimeout(() => {
    //         window.location = "login.html";
    //     }, 2000);
    // } else {
    //     // div_msg.innerHTML = `Campos inválidos`;
    // } 
}
