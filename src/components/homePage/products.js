import React, {useEffect, useState} from 'react';
import './products.css';
import Items from './items/items';
import {getAllProducts} from '../../services/productsApiService';
import {getAllCategories} from '../../services/categoriesApiService';
import {search, locateFilterTerm, locateQueryParam, compareValues} from '../../utils/filterUtills';



const Products = ({location})=> {

 const [state, setState]= useState({products: [], categories: []});

  useEffect(()=> {
      /*TODO: get data from API with async-await implementaion*/
      const allProducts = getAllProducts();
      const allCategories = getAllCategories();
      setState({products: allProducts.default, categories: allCategories.default})
  },[]);

  const convertCategoryId = (id)=> {
    return (state.categories.find(obj=> obj.id === id)).name;      
   }

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
            const manipulateProducts = [...state.products];
            manipulateProducts.forEach(obj=> {
                obj.category = convertCategoryId(obj.categoryId);
            })
           return manipulateProducts.sort(compareValues(term));
        default : return state.products;
    }
}

    return(
        <div className="container">
          {getProducts().length >0 ?
           <Items products={getProducts()}/>
          : <div style={{textAlign:"center"}}><b> Products Not found... </b></div>}
       </div>
        
    )
}

export default Products;