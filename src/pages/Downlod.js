import React, {useState} from 'react';
import dataJson from "../data/db.json";
import '../styles/Download.css'
import {Link} from "react-router-dom";

function Downlod(props) {
    const [data, setData] = useState(dataJson.download);

    return (
        <div className="container pt-2 pb-5 pt-3">
                {data.map(item => (
                    <div key={item.id}>
                        <p className="title">{item.name}</p>
                        <div>
                            <Link to={item.url} className="link mb-3">
                                {item.url.slice(13)}
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Downlod;