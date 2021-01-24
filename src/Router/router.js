import React from 'react';
import FrontPage from '../Components/FrontPage';
import {Route} from 'react-router-dom';


const ReactRouter =() => {
    return(
        <React.Fragment>
            <Route exact path="/" component={FrontPage}/>
        </React.Fragment>
    )
}
export default ReactRouter
