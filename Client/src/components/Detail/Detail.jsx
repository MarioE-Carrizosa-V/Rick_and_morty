import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from './Detail.module.css'
//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//const API_KEY = '76448700d4be.f00bfe4c440acaeea111';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState ({});
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)   
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return (
    <div className={style.cardDisplay}>
        <div className="Detail">
            <card className={style.cards}>
                <h2>{character?.name}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.species}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.origin?.name}</h2>
                <img src={character?.image} alt={character?.name} />
            </card>
        </div>
    </div>
    )
}

export default Detail