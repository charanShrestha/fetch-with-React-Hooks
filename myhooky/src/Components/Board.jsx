import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

function Board() {
  
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const url = `https://hn.algolia.com/api/v1/search?query=
    ${query}`
    if (query.length > 0) {
      fetch(url)
      .then(res => res.json())
      .then(data => setHits(data))
      .then(setLoading(false));
    } 
  },[loading]);
    
  return (
    <div className="board">
        <input
          placeholder="What would you like to search for?"
          onChange={ (e) => setQuery(e.target.value) }
          type="text"
          />
        <button onClick={() => setLoading(true)}>Go!</button>

        { loading ? (
          <LoadingSpinner />
          ) : (
            <Card hits={hits}/>
            )}
      </div>
    );
  }
export default Board;
