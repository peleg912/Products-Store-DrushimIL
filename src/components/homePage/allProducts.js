import React from 'react';
import './products.css';
import Items from './items/items';
import * as allProducts from '../../utils/api/products.json';


const AllProducts = (props)=> {
    return(
            <div className="container">
                <Items products={allProducts.default}/>
            </div>
        
    )
}

export default AllProducts;