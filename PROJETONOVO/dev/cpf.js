let entrada = 11144477705
let parte1
let parte2
// $("#cpf").val()
for (let i = 0; i <= 11; i++) {
  if (i <= 5) {
    parte1 += entrada[i]
  } else {
    parte2 += entrada[i]
  }
}
console.log(parte1)
console.log(parte2)


