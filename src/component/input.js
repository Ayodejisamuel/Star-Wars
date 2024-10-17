import React from "react";


const SearchInput = ({onChange, value}) => {
   

    return (<div>
        <input type="text"
        value={value}
         placeholder="Search by name"
         onChange={(e) => {onChange(e.target.value)}} />
       </div>
    )
}

export default SearchInput;