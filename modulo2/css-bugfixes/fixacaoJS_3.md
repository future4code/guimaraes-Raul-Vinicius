```function calculaNota(ex, p1, p2) {
    
  let valorExercicios = ex * 1 
  let valorProvaUm = p1 * 2
  let valorProvaDois = p2 * 3
  
  let mediaPonderada = (valorExercicios + valorProvaUm + valorProvaDois) / 6
  
  if (mediaPonderada >= 9) {
    return "A"
  } else if (mediaPonderada < 9 && >= 7.5) {
    return "B"
  } else if (mediaPonderada < 7.5 && >= 6) {
    return "C"
  } else (mediaPonderada < 6) {
    return "D"
  }
}```