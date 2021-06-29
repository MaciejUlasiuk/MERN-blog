import React from 'react';
import img1 from './imgs/headerimg.png';
import Posts from './Posts';
import Footer from './Footer';
const Header = () => {
    return ( 
        <>  
        <p className="headerp">My Programming Blog </p>
         <img className="headerimg" src={img1} alt={img1}></img>
         <Posts/>
         <Footer/>
        </>
     );
}
 
export default Header;