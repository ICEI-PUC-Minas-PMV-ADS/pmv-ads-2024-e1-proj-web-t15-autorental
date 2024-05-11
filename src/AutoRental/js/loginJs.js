var script = document.createElement('script');
script.type = "text/javascript";
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.body.appendChild(script);

var loginButton = document.getElementById("btnLogar");
var emailInput = document.querySelector("#email");
var senhaInput = document.querySelector("#senha");

loginButton.addEventListener("click", function(event){
    //Primeiro, validação do campo email

    var loginValidado = validaLogin(emailInput.value);
    var senhaValidada = validaSenha(senhaInput.value);

    if (loginValidado && senhaValidada){
        Swal.fire({
            text: "Sucesso!",
            icon: "success",
            title: "Login efetuado com sucesso."
        }).then((result) => {
            location.href='../views/home.html';
        });

        return;
    }
    else if (loginValidado && !senhaValidada){
        Swal.fire({
            text: "senha inválida!",
            icon: "warning",
            title: "Digite uma senha válida."
        }).then((result) => {
            senha.value = "";
        });

        return;
    }

    Swal.fire({
        text: "Email inválido!",
        icon: "warning",
        title: "Digite um email válido."
    }).then((result) => {
        emailInput.value = "";
    });
});

function validaLogin(email){
    if (email == "")
        return false

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

    var teste = emailRegex.test(email);

    return teste;
};

function validaSenha(senha){
    if (senha == "")
        return false

    return true;
}