 
import { useEffect, useState } from 'react';
import SearchInput from './component/input';
import './App.css';




const SWAPI_URL = 'https://swapi.dev/api/people';


function App() {


  // Fetch data from API......done
  //populate the data on ui....done
  // create search functionality 
  // select results based on search input
 

  const [peopleData, setPeopleData] = useState([])
  const [searchData, setSearchData] = useState("")

  

  useEffect(() => {

    try {
          const fetchData = async() => {
            const response = await fetch(
              searchData ? `${SWAPI_URL}/?search=${searchData}` : SWAPI_URL)
            const data = await response.json();
            setPeopleData(data.results)
          }
          fetchData();
    } catch (error) {
      console.log('unable to fetch data', error)
    }
  
  }, [searchData])


  return (
    <div className="App">
       <div>Star Wars People</div>

       <div>
         <SearchInput value={searchData}  setSearchData={setSearchData}/>
       </div>

       <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Birth Year</th>
        </tr>
        </thead>

        <tbody>
          {peopleData.map( (person) => (
            <tr key={person.name}>
            <td>{person.name}</td>
            <td>{person.height}</td>
            <td>{person.birth_year}</td>
          </tr>
          ))}
        </tbody>
       </table>
    </div>
  );
}

export default App;
