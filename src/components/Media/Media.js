import React from 'react';

const Media = () => {
    return (
        <div className='video d-flex justify-content-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1IwKWYNycj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default Media;