import React,{useEffect, useState} from 'react';
import {getAllCategories} from '../../../../services/categoriesApiService'
import {withRouter} from 'react-router-dom';

const CategoryDrop = (props)=> {

    const [state, setState] = useState({categories: []});

    useEffect(()=> {
        const allCategories = getAllCategories();
        setState({categories: allCategories.default}); 
    },[]);
   
    const route = (event)=> {
        props.history.replace(`/products?category=${event.target.value}`);
    }

    return(
        <>
        <select className="form-select" name="categories" onChange={(event)=>route(event)}>
            <option value="" >Category</option>
             {state.categories.map(obj=>{
                 return(
                       <option key={obj.id} value={obj.id}>
                         {obj.name}
                        </option>
                 )
             })}

        </select>
        </>
    )
}

export default withRouter(CategoryDrop);