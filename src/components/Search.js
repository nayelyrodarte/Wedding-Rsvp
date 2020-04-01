import React from 'react';
import Spinner from './Spinner';

const Search = ({ guests, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    console.log(guests);
    return 'hi';
  }
};

export default Search;
