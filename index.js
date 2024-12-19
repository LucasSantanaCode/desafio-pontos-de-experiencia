//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let monsterlvl = parseInt(gets());
let battledificult = parseInt(gets());
let xpmultiplicator = 100

//TODO: Implemente a lógica para exibir o xpGanho:
let xpGanho = CalculateXpGanho(monsterlvl,battledificult,xpmultiplicator)

function CalculateXpGanho(monsterlvl,battledificult,xpmultiplicator){
  let calculate = (monsterlvl * battledificult) * xpmultiplicator
  return calculate
}

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
