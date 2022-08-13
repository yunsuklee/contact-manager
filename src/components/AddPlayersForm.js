import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions';

function AddPlayerForm(props) {
  const [person, setPlayer] = useState('');

  function handleChange(e) {
    setPlayer(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== '') {
      props.addPlayer(person);
      setPlayer('');
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add new player"
        onChange={handleChange}
        value={person} 
      />
      <button type="Submit">Add</button>
    </form>
  );
}

const mapDispatchToProps = {
  addPlayer
};

export default connect(null, mapDispatchToProps)(AddPlayerForm);