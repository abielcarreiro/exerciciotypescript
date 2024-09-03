// Agora vamos desenvolver a parte do jogo Cubos Game responsável por bonificar o jogador que conseguir passar de fase. O bônus funciona 
//da seguinte forma: os pontos do jogador são multiplicados pelo número da 
//fase que ele acabou de passar. Desta forma, quanto mais longe o jogador chega, maior a bonificação.
let points : number = 2000
let next_phase: number = 3 

const points_total = points * next_phase

console.log(`Você acabou de passar para a fase ${next_phase}. Seus pontos acumulados foram multiplicados pelo número da fase, resultando em ${points_total} pontos.`)