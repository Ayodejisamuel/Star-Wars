import React from "react";
import { useEffect, useState } from "react";



const SearchInput = ({setSearchData, value}) => {


    const [debounceTime, setDebounceTime] = useState(value)
   
        const handleChange = (e) => {
                setSearchData(e.target.value)

        }
  useEffect( () => {
    const delayInput = setTimeout( () => {
        setDebounceTime(value)
    }, 500)
    return () => clearTimeout(delayInput)
  }, [value])
        



    return (<div>
        <input type="text"
        value={value}
         placeholder="Search by name"
         onChange={handleChange} />
       </div>
    )
}

export default SearchInput;