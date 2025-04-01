document.addEventListener("DOMContentLoaded", function () {
    const professorRadio = document.getElementById("professor");
    const alunoRadio = document.getElementById("aluno");
    const campoProfessor = document.getElementById("campoProfessor");
    const campoAluno = document.getElementById("campoAluno");
    const emailInput = document.getElementById("email");
    const emailErro = document.getElementById("emailErro");

    professorRadio.addEventListener("change", function () {
        campoProfessor.style.display = "block";
        campoAluno.style.display = "none";
    });

    alunoRadio.addEventListener("change", function () {
        campoProfessor.style.display = "none";
        campoAluno.style.display = "block";
    });

    emailInput.addEventListener("input", function () {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
        emailErro.style.display = emailValido ? "none" : "block";
    });

    document.getElementById("formCadastro").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulário enviado com sucesso!");
    });
});
