import React from 'react';
import { connect } from 'react-redux';

function PeopleList(props) {
  const arr = props.contacts;
  const listItems = arr.map((person, index) => 
    <li key={index}>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(mapStateToProps)(PeopleList);