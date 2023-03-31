import { useLocation, matchPath } from 'react-router-dom';
import notfound1 from '../images/notfound1.png';
import Gryffindor from '../images/Gryffindor.jpg'
import Ravenclaw from '../images/Ravenclaw.jpg'
import Slytherin from '../images/Slytherin.jpg'
import Hufflepuff from '../images/Hufflepuff.jpg'

function CharacterDetail({ data, selectedHouse }) {

    //Emblema de la casa:
    const houseBadge = () => {
        if (selectedHouse === 'Gryffindor') {
            return <img className="badge" src={Gryffindor} alt="Gryffindor emblem" />
        } else if (selectedHouse === 'Ravenclaw') {
            return <img className="badge" src={Ravenclaw} alt="Ravenclaw emblem" />
        } else if (selectedHouse === 'Slytherin') {
            return <img className="badge" src={Slytherin} alt="Slytherin emblem" />
        } else if (selectedHouse === 'Hufflepuff') {
            return <img className="badge" src={Hufflepuff} alt="Hufflepuff emblem" />
        }
    }

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
                {houseBadge()}
            </div>
        );
    } else {
        return (
            <p className="error-msg">This character does not exist</p>
        )
    }
}
export default CharacterDetail;