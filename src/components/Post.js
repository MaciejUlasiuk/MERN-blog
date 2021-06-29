import React from 'react';
 import img1 from './imgs/corspolicy.png'
 import img2 from './imgs/blog.png'
const Post = (props) => {
    return ( 
        <>
        <div className="postdiv">
        
        <h1>{props.title}</h1> 
        <img className="postImg" src={props.img} alt={props.img}></img> 
        <p className="postcontent">{props.content}</p> <p className="author">Czas nauki: {props.learningTime}</p> <p className="author">Maciej Ulasiuk</p>  <p className="date">{props.date}</p> 

         
         </div>
         </>
     );
}
 
export default Post;