import styled from "styled-components";

export const Container = styled.div`
    background-color: #2D0C5E;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 50px;

    h1 {
        color: #ffffff;
        font-family: sans-serif;
        letter-spacing: 1px;
        font-weight: 600;
        text-align: center;
    }
`

export const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #ffffff;
        font-family: sans-serif;
        letter-spacing: 1px;
    }

    div {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }
`

export const FilterButton = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
`