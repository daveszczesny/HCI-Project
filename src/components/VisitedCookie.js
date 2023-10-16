import React from "react";
import { useCookies } from "react-cookie";


const VisitedCookie = () => {
    const [cookies, setCookie] = useCookies(['visited']);

    const hasVisited = cookies.visited == true;

    if(!hasVisited)
    {
        setCookie('visited', true, {
            path: "/"
        });
    }

    return hasVisited;
};


export default VisitedCookie;