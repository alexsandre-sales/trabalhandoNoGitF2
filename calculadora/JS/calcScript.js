var memoria = []
var digitos = []
var float1
var float2
var nome
var valor = 0
var op
var resultado = {
  '+': (a, b) => {return a+b},
  '-': (a, b) => {return a-b},
  '*': (a, b) => {return a*b},
  '/': (a, b) => {return a/b}
}
var res

$("input").click((event)=>{
  nome = event.target.name
  valor = event.target.value
  console.log("Ler:", valor)
  if(valor == "C"){
    valor = ""
    digitos = ""
    memoria = ""
    $("#memoria").html(memoria)
    $("#entrada-saida").html(valor)
    console.log("IF valor:", valor)
    console.log("IF digitos:", digitos)
    console.log("IF memoria:", memoria)
  }else if(nome == "op"){
    if(float1 > 0){
      float2 += parseFloat(digitos)
      resultado[op](float1, float2)
      float1 = ""
      $("#entrada-saida").html(resultado)
    }else{
      memoria += digitos
      memoria += valor
      float1 = parseFloat(digitos)
      digitos = ""
      op = valor
    }
    $("#memoria").html(memoria)
    $("#entrada-saida").html(digitos)
    console.log("ELSE IF", op, "memoria:", memoria)
    console.log("ELSE IF", op, "digitos:", digitos)
  }else if(valor == " ="){
    memoria += digitos
    float2 = parseFloat(digitos)
    res = resultado+op+(float1, float2)
    $("#entrada-saida").html(res)
    console.log("ELSE IF = float1:", float1)
    console.log("ELSE IF = op:", op)
    console.log("ELSE IF = float2:", float2)
    console.log("ELSE IF = resultado:", resultado)
  }else{
    digitos += valor
    $("#entrada-saida").html(digitos)
    console.log("ELSE digitos:", digitos)
    console.log("ELSE memoria:", memoria)
  }
})

$("[name='CC']").click(()=>{
  $("#cientifica").toggle("slow")
})

class calculadora{
  constructor(n1, n2){
    this.n1 = n1
  }
}

// else if(valor == " ="){
//   float1 = parseFloat(digitos1)
//   $("#memoria").html(float1)
//   console.log("Float1:", float1)