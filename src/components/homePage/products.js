import React, {useEffect, useState} from 'react';
import './products.css';
import Items from './items/items';
import {getAllProducts} from '../../services/productsApiService';
import {search, locateFilterTerm, locateQueryParam, compareValues} from '../../utils/filterUtills';



const Products = ({location})=> {

 const [state, setState]= useState({products: []});

  useEffect(()=> {
      /*TODO: get data from API with async-await implementaion*/
      const allProducts = getAllProducts();
      setState({products: allProducts.default})
  },[]);

  const getProducts = ()=> {
    const param = locateQueryParam(location.search, "=");
    let term = locateFilterTerm(location.search, "=");
    switch (param){
        case 'search':
            return search(state.products, "name", term);
        case 'category':
          if (term==="") return state.products;
          return state.products.filter(obj=> obj.categoryId == term);
        case 'sortBy': 
           return [...state.products].sort(compareValues(term));
        default : return state.products;
    }
}

    return(
        <div className="container">
          {getProducts().length >0 ?
           <Items products={getProducts()}/>
          : <div> Products Not found...</div>}
       </div>
        
    )
}

export default Products;