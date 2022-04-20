import React from "react";

const Post = ({ img, learningTime, date, title, content }) => {
  return (
    <>
      <div className="postdiv">
        <h1>{title}</h1>
        <img className="postImg" src={img} alt={img}></img>
        <p className="postcontent">{content}</p>
        <p className="author">Czas nauki: {learningTime}</p>
        <p className="author">Maciej Ulasiuk</p>{" "}
        <p className="date">{date}</p>
      </div>
    </>
  );
};

export default Post;
