import React from "react";

function NewsItem(props) {
  return (
    <div className="my-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src= {props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.content}
          </p>
          <a href={props.url} className="btn btn-primary">
            Check out the whole news
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
