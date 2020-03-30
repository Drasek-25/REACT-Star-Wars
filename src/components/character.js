import React from 'react';
import { string, array } from 'prop-types';

import MovieList from './movielist';

const Character = props => {
  //   Add any `console.log` code here before the `return` statement if you want to inspect a variable
  // -------- CODE HERE ----------



  // -----------------------------
  return (
    <div className="col-4 border border-primary" style={{}}>
      <h2>{props.name}</h2>
      <h4>year born: {props.birth_year}</h4>
      <h4>eye color: <span style={{ color: props.eye_color }}>{props.eye_color}</span></h4>
      <h4>hair color: {props.hair_color}</h4>
      <h4>skin color: {props.skin_color}</h4>
      <h4>gender: {props.gender}</h4>
      <h4>mass: {props.mass}</h4>
      <h4>height: {props.height}</h4>


      <MovieList
        movies={props.movies}

      />
    </div>
  )
}

Character.propTypes = {
  name: string,
  birth_year: string,
  eye_color: string,
  films: array
}

export default Character;