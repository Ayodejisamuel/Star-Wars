 
import { useEffect, useState } from 'react';
import './App.css';




const SWAPI_URL = 'https://swapi.dev/api/people';


function App() {


  // Fetch data from API
  //populate the data on ui
  // create search functionality 
  // select results based on search input


  // const data = fetch(SWAPI_URL)
  // .then((response) => response.json());

  const [peopleData, setPeopleData] = useState([])

  useEffect(() => {
    try {
          const fetchData = async() => {
            const response = await fetch(SWAPI_URL)
            const data = await response.json();

            console.log(data);

            setPeopleData(data.results)

          }

          fetchData();
    } catch (error) {
     
      console.log('unable to fetch data', error)
      

    }

  
  }, [])


  return (
    <div className="App">
       <div>Star Wars People</div>

       

       <div>
        <input type="text" onChange={() => {}}/>
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
            <tr>
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
