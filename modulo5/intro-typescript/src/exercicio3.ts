function checaAnoBissexto(ano:number):boolean {
    // const cond1 = ano % 400 === 0
    // const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    // return cond1 || cond2

    if (ano % 4 == 0 && ano % 100 != 0) {
        return true;
      } if (ano % 400 == 0) {
        return true;
      } else {
        return false;
      }
 }

 console.log(checaAnoBissexto(400))