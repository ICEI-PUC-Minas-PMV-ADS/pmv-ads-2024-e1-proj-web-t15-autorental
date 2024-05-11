var script = document.createElement('script');
script.type = "text/javascript";
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.body.appendChild(script);

var menuItem = document.querySelectorAll('.item-menu');
    var btnExpandir = document.querySelector('#btnExpandir');
    var menuLateral = document.querySelector('.menu-lateral');
    var logoutLink = document.querySelector("#logoutLink");

menuItem.forEach((item) =>{
    item.addEventListener('click', selectLink);
})

btnExpandir.addEventListener('click', function(){
    menuLateral.classList.toggle('expandir');
});

logoutLink.addEventListener('click', function(){
    Swal.fire({
        text: "Tem certeza que deseja sair?",
        icon: "question",
        title: "Logout",
        showDenyButton: true,
        confirmButtonText: "Sair",
        denyButtonText: "Cancelar",
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            location.href='../views/inicio.html';
        }
    });
});

function selectLink(){
    menuItem.forEach((item) =>{
        item.classList.remove('ativo');
    });

    this.classList.add('ativo');
}