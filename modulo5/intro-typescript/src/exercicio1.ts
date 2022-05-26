function checaTriangulo(a:number, b:number, c:number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log("O triangulo é", checaTriangulo(3,4,4))
  console.log("O triangulo é", checaTriangulo(3,4,5))
  console.log("O triangulo é", checaTriangulo(4,4,4))