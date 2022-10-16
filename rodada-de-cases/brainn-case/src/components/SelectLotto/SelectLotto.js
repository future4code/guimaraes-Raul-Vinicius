import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const SelectLotto = () => {

    const navigate = useNavigate()

    const {games} = useContext(GlobalStateContext)

    const onChange = (event) => {
        navigate(event.target.value)
    }

    return (
        <select onChange={onChange}>
            <option value={"/"}>{games[0] && games[0].nome.toUpperCase()}</option>
            <option value={"/quina"}>{games[1] && games[1].nome.toUpperCase()}</option>
            <option value={"/lotofacil"}>{games[2] && games[2].nome.toUpperCase()}</option>
            <option value={"/lotomania"}>{games[3] && games[3].nome.toUpperCase()}</option>
            <option value={"/timemania"}>{games[4] && games[4].nome.toUpperCase()}</option>
            <option value={"/diadesorte"}>{games[5] && games[5].nome.toUpperCase()}</option>
        </select>
    )
}

export default SelectLotto;