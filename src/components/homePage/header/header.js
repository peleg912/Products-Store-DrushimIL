import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props)=> {
    return(
        <Link to="/products" style={{textDecoration: "none", color: "black"}}>
        <h1><b>Products Store</b></h1>
             <hr/>
         </Link>
    )
}

export default Header;