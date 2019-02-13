const $inputSenha = document.querySelector('#senha');
const $inputConfirmarSenha = document.querySelector('#confirmar-senha');
const $inputNome = document.querySelector('#nome');
const $inputSobrenome = document.querySelector('#sobrenome');
const $inputEmail = document.querySelector('#email');
const $labelSenha = document.querySelector('#senha-diferente')
const $botaoRegistro = document.querySelector('.btn-registrar')
const $conteudo = document.querySelector('.formulario-itens');

// console.log($inputSenha,$inputConfirmarSenha,$inputNome,$inputEmail,$inputSobrenome,$labelSenha,$botaoRegistro);
let senhasConferem = false;

function checaSenha() {
    const conteudoSenha = $inputSenha.value;
    const conteudoConfirmarSenha = $inputConfirmarSenha.value;
    if (conteudoSenha == conteudoConfirmarSenha){
        $labelSenha.innerHTML = '';
        return senhasConferem = true;
    }else{
        $labelSenha.innerHTML = 'As senhas precisam ser iguais.'
        checkForm();
        return senhasConferem = false;


    }
}



function checkForm(){
    if ($inputNome.value.length > 2 && $inputNome.value.length < 20 && $inputSobrenome.value.length > 2 && $inputEmail.value.length > 7 && senhasConferem == true){
        // console.log('asdf')
        // console.log($inputNome.value.length > 2 && $inputSobrenome.value.length > 2 && $inputEmail.value.length > 7 && senhasConferem == true)
        $botaoRegistro.classList.add('-active-btn');
        $botaoRegistro.removeAttribute('disabled');
    }else{
        $botaoRegistro.classList.remove('-active-btn');

        $botaoRegistro.addAttribute('disabled');

    }
}

window.addEventListener('keydown', event =>{
    checkForm();
})
window.addEventListener('click', event =>{
    checkForm();
    checaSenha();

})

$inputConfirmarSenha.addEventListener('focusout', event =>{
    checaSenha();

})

$botaoRegistro.addEventListener('click', event => {
    event.preventDefault();
    $conteudo.innerHTML = `
        <h1 class="msg-sucesso"> ${$inputNome.value}, seu cadastro foi realizado com sucesso! </h1>
    `
})