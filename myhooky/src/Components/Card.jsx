import React from "react";

function Card (props) {
  const arr = props.hits.hits;
    function formatDate(date) {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return year + "-" + month + "-" + dt;
  }

  return (
    <div className="wrapper">
      {arr ? (
        arr.map(article => (
          <p className="box effect7" key={Math.random()}>
            <span className="left">Title: </span><span className="right">{article.title}</span>
            <br />
            <span className="left">Author: </span><span className="right">{article.author}</span> 
            <br />
            <span className="left">Date created: </span><span className="right">{formatDate(article.created_at)}</span>
            <br />
          </p>
        )) 
        ) : (
          <div> your search will appear here </div>
        )}
    </div>
    );
  }


export default Card;
