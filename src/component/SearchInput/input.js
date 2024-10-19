import React from "react";
import { useEffect, useState } from "react";
import './input.css'
import {FaSearch} from 'react-icons/fa'



const SearchInput = ({setSearchQuery, value}) => {


    const [searchDelay, setSearchDelay] = useState(value)
   
        const handleChange = (e) => {
                setSearchDelay(e.target.value)
 

        }
  useEffect( () => {
    const delayInput = setTimeout( () => {
        setSearchQuery(searchDelay.toLowerCase())
    }, 500)
    return () => clearTimeout(delayInput)
  }, [searchDelay, setSearchQuery])
        

    return (<div className="input-div">
       <FaSearch className="search-icon" />
        <input type="text"
        value={searchDelay}
         placeholder="Search by name"
         onChange={handleChange} />
       </div>
    )
}

export default SearchInput;