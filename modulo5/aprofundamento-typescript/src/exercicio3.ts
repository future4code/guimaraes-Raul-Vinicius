const nome:string = "Raul"

type Post = {
    autor:string,
    texto:string
}

const posts:Post[] =[
    {
        autor: "Alvo Dumbleodore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },

    {
        autor: "Severo Snape",
        texto: "Always"
    }
]

function buscarPostsPorAutor(posts:Post[], autorInformado:string):Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

  console.log(buscarPostsPorAutor(posts,"Alvo Dumbleodore"))