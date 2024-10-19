import { useEffect, useState } from "react";
import SearchInput from "./component/SearchInput/input";
import "./App.css";
import { Riple } from "react-loading-indicators";
import CharacterTable from "./component/Table/characterTable";
import Header from "./component/Header/header";


const SWAPI_URL = "https://swapi.dev/api/people";

function App() {

  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {


    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          searchQuery ? `${SWAPI_URL}/?search=${searchQuery}` : SWAPI_URL
        );

        if(!response.ok) {
          throw new Error('Network Error')
        }
        const data = await response.json();

        if (data.results.length === 0) {
          setError("No Results Found");
          setCharacters([]);
        } else {
          console.log(data.results)
          setCharacters(data.results);
          setError("");
        }
      } catch (error) {
        setError("Unable to fetch data, check network connection");
        console.log(error.message)
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="container">
      <Header />
      <div>
        <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} />
        {loading && <Riple color="#32cd32" size="large" text="" textColor="" />}
      </div>

      {error && <p>{error}</p>}
      <CharacterTable  characters={characters}/>
    </div>

    
  );
}

export default App;
