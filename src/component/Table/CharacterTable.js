import React from "react";
import './characterTable.css'

const CharacterTable = ({characters}) => {

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
          {characters.map((character) => (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>{character.height}</td>
              <td>{character.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>)
}

export default CharacterTable;