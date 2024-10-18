import { useEffect, useState } from "react";
import SearchInput from "./component/SearchInput/input";
import "./App.css";
import { Riple } from "react-loading-indicators";
import CharacterTable from "./component/Table/CharacterTable";

const SWAPI_URL = "https://swapi.dev/api/people";

function App() {

  // Fetch data from API......done
  //populate the data on ui....done
  // create search functionality
  // select results based on search input

  const [peopleData, setPeopleData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {


    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          searchData ? `${SWAPI_URL}/?search=${searchData}` : SWAPI_URL
        );
        const data = await response.json();

        if (data.results.length === 0) {
          setError("No Results Found");
          setPeopleData([]);
        } else {
          console.log(data.results)
          setPeopleData(data.results);
          setError("");
        }
      } catch (error) {
        setError("Unable to fetch data");
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [searchData]);

  return (
    <div className="App">
      <div>Star Wars People</div>

      <div>
        <SearchInput value={searchData} setSearchData={setSearchData} />
      </div>

      {error && <p>{error}</p>}
      <CharacterTable  peopleData={peopleData}/>
      {loading && <Riple color="#32cd32" size="medium" text="" textColor="" />}
    </div>

    
  );
}

export default App;
