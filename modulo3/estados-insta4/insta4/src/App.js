import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://scontent.faqa4-1.fna.fbcdn.net/v/t39.30808-6/s640x640/273967032_453880839775300_8660581524915433220_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CPYMVqGupHMAX-yFuGL&_nc_ht=scontent.faqa4-1.fna&oh=00_AT-kqFFFqoWlrt6oUhIMFNr2fxeOJHtKg4g8ImC88X8S9g&oe=620EA599'}
          fotoPost={'https://scontent.faqa4-1.fna.fbcdn.net/v/t39.30808-6/s640x640/273967032_453880839775300_8660581524915433220_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CPYMVqGupHMAX-yFuGL&_nc_ht=scontent.faqa4-1.fna&oh=00_AT-kqFFFqoWlrt6oUhIMFNr2fxeOJHtKg4g8ImC88X8S9g&oe=620EA599'}
        />

        <Post
          nomeUsuario={'raulrita_'}
          fotoUsuario={'https://scontent.faqa4-1.fna.fbcdn.net/v/t1.6435-9/107914424_705701970223206_8271228698852476983_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=8wqidCS_hpAAX_Np1pf&_nc_ht=scontent.faqa4-1.fna&oh=00_AT_Fh4zVvEx_Exl0VQOy8BjTGxpoKvPxnDzywTE0Ghis3w&oe=62316A5F'}
          fotoPost={'https://scontent.faqa4-1.fna.fbcdn.net/v/t1.6435-9/76702464_547723272687744_5482085111174266880_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=5whG3b3XCnQAX_IA5SJ&_nc_ht=scontent.faqa4-1.fna&oh=00_AT9e2WdiSAF1h4iwmLS9Jl0ANQK0zDPjpiC9sLd-s3Lefg&oe=62301CD7'}
        />

        <Post
          nomeUsuario={'originalge_'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
