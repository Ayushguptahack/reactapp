import React from "react";
import Gallerycard from "./Gallerycard";

function Gallery(){
    let images = ["agrafort.jpg","goldentemple.jpg","hawamahal.jpg","qutubminar.jpg","redfort.webp","taj.jpg"]
    let title = ["Agra Fort","Golden Temple","Hawa Mahal","Qutub Minar","Red Fort","Taj Mahal"]
    let details =  ["Agra Fort is a historical fort in the city of Agra in India. It was the main residence of the emperors of the Mughal Dynasty till 1638, when the capital was shifted from Agra to Delhi. The Agra fort is a UNESCO World Heritage site.",
"The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs.",
"The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur",
"Qutab Minar is a soaring, 73 m-high tower of victory, built in 1193 by Qutab-ud-din Aibak immediately after the defeat of Delhi's last Hindu kingdom.",
"The Red Fort Complex was built as the palace fort of Shahjahanabad – the new capital of the fifth Mughal Emperor of India, Shah Jahan.",
"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife."
];

let objarr = [{
    images : images[0],
    title : title[0],
    details : details[0]
},
{
    images : images[1],
    title : title[1],
    details : details[1]
},
{
    images : images[2],
    title : title[2],
    details : details[2]
},
{
    images : images[3],
    title : title[3],
    details : details[3]
},
{
    images : images[4],
    title : title[4],
    details : details[4]
},
{
    images : images[5],
    title : title[5],
    details : details[5]
}]
    return(
        <div className="galleryparent">
            <div className="gd1"></div>
            <div className="galleryheading">
                <h1>Gallery</h1>
            </div>
            <div className="gallerycardscontainer">
                {
                    objarr.map((x) => (
                        <Gallerycard objdetails={x} title/>    
                    ))
                }
            </div>
        </div>
    );
}

export default Gallery;