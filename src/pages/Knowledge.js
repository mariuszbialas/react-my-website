import React, {useState} from 'react';
import dataJson from "../data/db.json";
import '../styles/Knowledge.css';

const Knowledge = (props) => {
    const [data, setData] = useState(dataJson.knowledge);
    
    return (
        <div className="pb-5">
            {data.map(item =>
                <div className="container skills" key={item.id}>
                    <ul>
                        <li>
                            <span>{item.name}</span>
                            <span className="percent">
                                <div style={{width: `${item.percent}%`}}></div>
                            </span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Knowledge;