import React from 'react';
import {useLocation} from "react-router-dom"


const InfoPage = () => {

    const location = useLocation();

    return (
        <div>
            <h3 className={"info_page"}>Info Page</h3>
            <hr></hr>
            {location.state.text}
        </div>
    );
};

export default InfoPage;
