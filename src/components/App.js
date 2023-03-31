import '../styles/App.scss'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters'
import getDataFromApi from '../services/Api';

function App() {

  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [errorSearch, setErrorSearch] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('Gryffindor');

  useEffect(() => {
    getDataFromApi(selectedHouse)
      .then((responseData) => {
        /*  Si queremos que aparezcan por orden alfabético:
        responseData.sort((a, b) => a.name.localeCompare(b.name)); */

        //Metemos los datos de la respuesta de la Api en variable data:
        setData(responseData)
      })
  }, [selectedHouse]);


  return (
    <div >
      <header className='header'>
        <h1 className="title-header">Welcome to Hogwarts</h1>
      </header>
      <main>
        <Routes>

          <Route path="/" element={<>
            <Filters
              data={data}
              setErrorSearch={setErrorSearch}
              setSelectedHouse={setSelectedHouse}
              errorSearch={errorSearch}
              setSearchName={setSearchName}
              searchName={searchName}
            >
            </Filters>

            <CharacterList
              data={data}
              searchName={searchName}
            > </CharacterList>  </>}>
          </Route>

          <Route path='/character/:characterId' element={
            <CharacterDetail
              data={data}
              selectedHouse={selectedHouse}
              setSelectedHouse={setSelectedHouse}
            >

            </CharacterDetail>}></Route>
        </Routes>


      </main>

    </div >
  );
}
export default App;