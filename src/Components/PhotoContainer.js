import React from 'react';
import Photo from '../Components/Photo'
import NotFound from '../Components/NotFound'

function PhotoContainer(props) {
    let results = props.data;
    let photos;
    let heading;
    if (results) {
        if (results.length > 0) {
            heading = <h3>Results</h3>;
            photos = results.map(photo => 
                <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
            );
        } else {
            photos = <NotFound />
        }
    } 

    return(
        <div className="photo-container">
            {heading}
            <ul>
                {photos}
            </ul>
        </div>
    ) 
}

export default PhotoContainer;