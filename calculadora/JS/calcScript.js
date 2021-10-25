var memoria = []
var digitos = []
var float1
var float2
var nome
var valor = 0
var op // Recebe o operador matemático
var resultado
// Método para reconhecer as operações matemáticas
var res = {
  ' + ': (a, b) => {return a+b},
  ' - ': (a, b) => {return a-b},
  ' * ': (a, b) => {return a*b},
  ' / ': (a, b) => {return a/b},
  'x²': (a) => {return Math.pow(a, 2)},
  'x³': (a) => {return Math.pow(a, 3)},
  'raiz²': (a) => {return Math.sqrt(a)}
}
// "event" foi a melhor forma que encontrei para capturar as entradas de clique
$("input").click((event)=>{
  nome = event.target.name
  valor = event.target.value
  // Tratamento do botão "Calculadora Científica"
  if(valor == "C.C"){
    null
  // Tratamento do botão "C" para zerar a calculadora
  }else if(valor == "C"){
    valor = ""
    digitos = ""
    memoria = ""
    op = ""
    resultado = ""
    $("#memoria").html(memoria)
    $("#entrada-saida").html(valor)
  // Impressões no console para testes
    // console.log("IF valor:", valor)
    // console.log("IF digitos:", digitos)
    // console.log("IF memoria:", memoria)
  // Captura dos operadores matemáticos
  }else if(nome == "op"){
    if(resultado > 0){ // Tratamento da "memória".
      float1 = parseFloat(resultado)
      op = valor
      memoria += " = "
      memoria += resultado
      memoria += op
      memoria += digitos
      $("#memoria").html(memoria)
      $("#entrada-saida").html(resultado)
    // Impressões no console para testes
      // console.log("IF OP - float1:", float1)
      // console.log("IF OP - op:", op)
      // console.log("IF OP - float2:", float2)
      // console.log("IF OP - resultado:", resultado)
    }else{
      memoria += digitos
      memoria += valor
      float1 = parseFloat(digitos) // Grava os números em variável
      op = valor // Recebe o operador
      digitos = "" // Libera a variável para reutilização
      $("#memoria").html(memoria)
      $("#entrada-saida").html(digitos)
    }
    // Impressões no console para testes
      // console.log("ELSE IF", op, "memoria:", memoria)
      // console.log("ELSE IF", op, "digitos:", digitos)
  // Tratamento do resultado
  }else if(valor == " ="){
    memoria += digitos
    float2 = parseFloat(digitos) // Digitos depois do operador vão aqui
    // Aqui a operação é reconhecida e efetuada com os parâmetros gerando o resultado
    resultado = res[op](float1, float2)
  // Impressões no console para testes
    // console.log("ELSE IF = float1:", float1)
    // console.log("ELSE IF = op:", op)
    // console.log("ELSE IF = float2:", float2)
    // console.log("ELSE IF = resultado:", resultado)
    valor = ""
    digitos = ""
    op = ""
    $("#memoria").html(memoria)
    $("#entrada-saida").html(resultado)
  // Tratamento geral para o restante dos botões
  }else{
    digitos += valor
    $("#entrada-saida").html(digitos)
  // Impressões no console para testes
    // console.log("ELSE digitos:", digitos)
    // console.log("ELSE memoria:", memoria)
  }
})
// Sério que precisa explicar isso?
$("[name='CC']").click(()=>{
  $("#cientifica").toggle("slow")
})
