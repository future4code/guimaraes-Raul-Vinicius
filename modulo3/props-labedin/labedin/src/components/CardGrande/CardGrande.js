import React from 'react';
import styled from 'styled-components';

const BigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImageBigCard = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const TextCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const NameTextCard = styled.h4 `
    margin-bottom: 15px;
  
`

function CardGrande(props) {
    return (
        <BigCard>
            <ImageBigCard src={ props.imagem } />
            <TextCard>
                <NameTextCard>{ props.nome }</NameTextCard>
                <p>{ props.descricao }</p>
            </TextCard>
        </BigCard>
    )
}

export default CardGrande;