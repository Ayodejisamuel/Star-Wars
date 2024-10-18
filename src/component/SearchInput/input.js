import React from "react";
import { useEffect, useState } from "react";
import './input.css'



const SearchInput = ({setSearchData, value}) => {


    const [debounceTime, setDebounceTime] = useState(value)
   
        const handleChange = (e) => {
                setDebounceTime(e.target.value)
 

        }
  useEffect( () => {
    const delayInput = setTimeout( () => {
        setSearchData(debounceTime)
    }, 500)
    return () => clearTimeout(delayInput)
  }, [debounceTime, setSearchData])
        



    return (<div className="input-div">
        <input type="text"
        value={debounceTime}
         placeholder="Search by name"
         onChange={handleChange} />
       </div>
    )
}

export default SearchInput;