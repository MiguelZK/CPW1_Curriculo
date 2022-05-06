// Exercício do formulário com JS (18/10/2020)
//FORMULÁRIO DE CONTATO
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Por favor, informe o seu nome. Os campos nome, assunto e email devem ser preenchidos.");
        return false;
    }
    var x = document.forms["myForm"]["fsubject"].value;
    if (x == "") {
        alert("Por favor, informe o assunto. Os campos nome, assunto e email devem ser preenchidos");
        return false;
    }
    var x = document.forms["myForm"]["femail"].value;
    if (x == "") {
        alert("Por favor, informe seu email. Os campos nome, assunto e email devem ser preenchidos");
        return false;
    }
}
