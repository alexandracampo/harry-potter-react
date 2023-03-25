import { useLocation, matchPath } from 'react-router-dom';
import notfound1 from '../images/notfound1.png'



function CharacterDetail({ data }) {


    // Si coincide, routeData es un objeto con mucha información útil
    // La información que me interesa está en routeData.params.id
    const { pathname } = useLocation();
    const routeData = matchPath('/character/:characterId', pathname);
    const characterId = routeData !== null ? routeData.params.characterId : '';


    const characterFound = data.find((character) => character.id === characterId);

    if (characterFound !== undefined) {
        return (
            <div className="main-detail">
                <div className="detail-card">
                    {characterFound.image ? <img className='detail-img' src={characterFound.image} alt={characterFound.name}></img> : <img className="detail-img" alt={characterFound.name} src={notfound1}></img>}

                    <div className="detail-box-text">
                        <p><span >Name: </span>{characterFound.name}</p>
                        <p><span >House: </span>{characterFound.house || "Desconocida"}</p>
                        {characterFound.alive === true ? <p><span>Status: </span>Alive 🖤</p> : <p><span>Status: </span>Dead 💀</p>}
                        <p><span >Gender: </span>{characterFound.gender}</p>
                        <p><span >Specie: </span>{characterFound.species}</p>
                        <p><span >Alternate names: </span>{characterFound.alternate_names}</p>

                    </div>
                </div>
            </div>
        );
    }
}
export default CharacterDetail;