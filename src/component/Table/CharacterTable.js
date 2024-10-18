import React from "react";
import './CharacterTable.css'

const CharacterTable = ({peopleData}) => {

    return (<div>
<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Birth Year</th>
          </tr>
        </thead>

        <tbody>
          {peopleData.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>)
}

export default CharacterTable;