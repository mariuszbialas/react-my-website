import React, {useState} from "react";
import photo from '../images/profil-photo.jpeg';
import dataJson from "../data/db.json";
import '../styles/AboutMe.css';

const AboutMe = () => {

    const [data, setData] = useState(dataJson.description[0]);

    return (
        <div className="container-sm pt-2 pb-5 pt-3">
            <img
                src={photo}
                alt="Profil Foto"
                className="img-fluid rounded-circle img-thumbnail border-info border-3 mb-3"
                style={{ maxWidth: '150px' }}
            />
            <h1 mb-2>{data.title}</h1>
            {
                data.description.map((item, index) => <p key={index}>{item}</p>)
            }
        </div>
    );

}

export default AboutMe;


// src/pages/AboutMe.js
// src/images/profil-photo.jpeg