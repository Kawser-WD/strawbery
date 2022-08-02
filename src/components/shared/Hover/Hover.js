import React from 'react';
const Hover = ({ isHovering = false }) => {

    return (
   
     <div className='headline'>
    {isHovering? <p className="hover-text">home</p> : <p className="headline-text">Wij leveren dagelijks 7 op 7 verse kawalitietvolle groeten fruit</p>}
   </div>
       
    );
};

export default Hover;