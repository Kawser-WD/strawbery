import React from 'react';
import './Media.css'
const Media = () => {
    return (
        <div className='video d-flex justify-content-center mt-5'>
           <iframe src="https://player.vimeo.com/video/737006444?h=8023054076" width="580" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default Media;