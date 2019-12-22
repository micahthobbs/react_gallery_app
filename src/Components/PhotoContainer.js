import React from 'react';
import Photo from '../Components/Photo'
import NotFound from '../Components/NotFound'

function PhotoContainer(props) {
    const results = props.data;
    let photos;
    if (results.length > 0) {
        photos = results.map(photo => 
            <Photo url={photo.images.fixed_height.url} key={photo.id} />
        );
    } else {
        photos = <NotFound />
    }
    
    return(
        <div className="photo-container">
            <ul>
                {photos}
            </ul>
        </div>
    ) 
}

export default PhotoContainer;