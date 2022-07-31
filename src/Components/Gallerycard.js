import React from "react";

function Gallerycard(props){

    return(
        <div className="gallerycard" style={{
            backgroundImage : `url(../GalleryImages/${props.objdetails.images})`
        }}>
            <div className="gallerycontent">
                <h1>{props.objdetails.title}</h1>
                <p>{props.objdetails.details}</p>
            </div>
        </div>
    )
}

export default Gallerycard;