import React from 'react';
import { array } from 'prop-types';

import Character from './character.js'

const CharacterList = props => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------



  // -----------------------------
  return (
    <div className="row">
      {
        // Create your .map function here
        props.characters.map(person => (
          <Character
            name={person.name} // DO NOT EDIT
            // Enter the correct props here
            birth_year={person.birth_year}
            eye_color={person.eye_color}
            movies={person.films}
            mass={person.mass}
            hair_color={person.hair_color}
            skin_color={person.skin_color}
            gender={person.gender}
            height={person.height}
          />
        ))
      }
    </div>
  )
}

CharacterList.propTypes = {
  characters: array
}


export default CharacterList;