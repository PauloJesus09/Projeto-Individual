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

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";

    if (finalizarAguardar == true) {
        setTimeout(() => {
            window.location = "login.html";
        }, 2000);
    } else {
        setTimeout(() => {
            window.location = "cadastro.html";
        });
    }
}

function finalizarAguardar() {

    var nomeVar = ipt_nome.value;
    var emailVar = ipt_email.value;
    var senhaVar = ipt_senha.value;
    var mensagem = "";
    if (nomeVar == '' || emailVar == '' || senhaVar == '') {
      ipt_nome.style.border = "1px solid red";
      ipt_email.style.border = "1px solid red";
      ipt_senha.style.border = "1px solid red";
      mensagem += `Preencha todos os campos!`;
    }

    if (emailVar.endsWith('@gmail.com') || emailVar.endsWith('@hotmail.com') || emailVar.endsWith('@outlook.com') || emailVar.endsWith('@yahoo.com') || emailVar.endsWith('@sptech.school') || emailVar.endsWith('@email.com')) {
      // o email precisa terminar com umas dessas validaçôes.
      ipt_email.style.border = "1px solid green";
    } else {

      ipt_email.style.border = "1px solid red";
      msgEmail.innerHTML = `Insira um email válido!`
    }

    if (senhaVar < 6) {
      ipt_senha.style.border = "1px solid red";
      msgSenha.innerHTML = `Senha precisa conter no mínimo 6 caracteres!`
    }

    div_msg.innerHTML = mensagem;
    // var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";
    
    // var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.style.display = "flex";
    //     divErrosLogin.innerHTML = texto;
    // }
}

