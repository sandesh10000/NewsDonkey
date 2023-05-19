import React from "react";
import donkeynewspaper from "./donkey_reading_newspaper.png";
const  NewsItem =(props)=> {
    let { title, description, imgurl, newsurl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card ">
          <div className="card-body">
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className=" badge rounded-pill bg-danger">{source}</span>
            </div>
            <img
              src={imgurl ? imgurl : donkeynewspaper}
              className="card-img-top"
              alt="..."
            />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author == null ? "Trust Me Bro" : author}{" "} On{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
