import { useEffect, useState } from "react";
import SearchInput from "./component/SearchInput/input";
import "./App.css";
import { Riple } from "react-loading-indicators";
import CharacterTable from "./component/Table/characterTable";
import Header from "./component/Header/header";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


//URL for fetching star war characters
const SWAPI_URL = "https://swapi.dev/api/people";

function App() {

  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
 
  const [loading, setLoading] = useState(false);


  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {


    const fetchData = async () => {
      setLoading(true);
    
      try {

        // fetch data based on search query, if no query fetch all characters
        const response = await fetch(
          searchQuery ? `${SWAPI_URL}/?search=${searchQuery}` : SWAPI_URL
        );

        if(!response.ok) {
          throw new Error('Network Error')
        }
        const data = await response.json();

//If no search results found  
        if (data.results.length === 0) {
 
          toast.error("No Results Found", toastOptions);
          setCharacters([]); // remove previous data
        } else {
          console.log(data.results)   
          setCharacters(data.results);//update results
 
        }
      } catch (error) {
        // setError("Unable to fetch data, check network connection");
        toast.error("Unable to fetch data, check network connection", toastOptions);
        console.log(error.message)
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [searchQuery,]); 

  return (
    <div className="container">
      <Header  title="Star Wars Character"/>
      <div className="search-div">
        <SearchInput value={searchQuery} setSearchQuery={setSearchQuery} />
        {loading && <Riple color="#fff" size="medium" text="" textColor="" />}
      </div>

 
      {!loading && 
       <CharacterTable  characters={characters}/>
      }
     

      <ToastContainer />
    </div>

    
  );
}

export default App;
