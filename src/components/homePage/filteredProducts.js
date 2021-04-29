import React from 'react';
import './products.css';
import Items from './items/items';
import * as allProducts from '../../utils/api/products.json';
import {search, locateFilterTerm, locateQueryParam} from '../../utils/filterUtills';


const FilteredProducts = ({location})=> {

    const getFilterdProducts = ()=> {
        const param = locateQueryParam(location.search, "=");
        const term = locateFilterTerm(location.search, "=");
        switch (param){
            case 'search':
                return search(allProducts.default, "name", term);
            case 'category':
                return allProducts.default;
            case 'sortBy': 
               return allProducts.default;
            default : return allProducts.default;
        }
    }
   
    
    return(
            <div className="container">
                {getFilterdProducts().length >0 ?
                <Items products={getFilterdProducts()}/>
                : <div> Products Not found...</div>}
            </div>
        
    )
}

export default FilteredProducts;