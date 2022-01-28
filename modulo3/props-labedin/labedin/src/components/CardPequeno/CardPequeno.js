import React from 'react';
import styled from 'styled-components';

const LittleCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const ImageLittleCard = styled.img `
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardPequeno(props) {
    return (
        <LittleCard className="littlecard-container">
            <ImageLittleCard src={ props.imagem } />   
            <p>{ props.descricao }</p>
        </LittleCard>
    )
}

export default CardPequeno;