import React from 'react';
import img from './imgs/trees.jpg'
const Aboutme = () => {
    return ( 
        <>
        <div className="aboutme">
            <h1 className="aboutme">Witaj na moim blogu!</h1>
                <p className="aboutme">Mam na imie Maciej, mam 19 lat w trakcie pisania tego i od miesiaca,
              tj od 27.05.2021 zarazilem sie pasja programowania w js
               i od tamtego momentu ucze sie po 7-12 godzin dziennie. Moim aktualnym celem jest dostanie sie do frontendu, a dalej
               prawdopodonie nauka tworzenia gier w js, advanced backendu i AI.</p>
               <img className="imgaboutme" src={img} alt={img}></img>
        </div>
        </>
     );
}
 
export default Aboutme;