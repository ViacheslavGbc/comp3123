import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const Navigation = props => {
    return (  
        
            <li>
                <Link to={props.link}>{props.name}</Link>
            </li>
    
    );
}
 
export default Navigation;
