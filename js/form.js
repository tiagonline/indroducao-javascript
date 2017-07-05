//função anonima
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  // seleciona pelo id criado no html de dentro do form
  var form = document.querySelector("#form-adiciona");
  //busca o valor dos inputs e guarda na variável
  var paciente = obtemPacienteDoFormulario(form);
  var pacienteTr = montaTr(paciente);

  //adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});
// dentro da função possui um objeto do tipo paciente
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
  //cria um tr que é o paciente
  var pacienteTr = document.createElement("tr");

  //cria vários td's para cada dado do usuário
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");
  //coloca os valores extraíros do form dentro de cada td
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;
  //adicionar td dentro de tr
  pacienteTr.appendChild(nomeTd);
  console.log(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}
