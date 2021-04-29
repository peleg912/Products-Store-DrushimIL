import React from 'react';
import * as categories from '../../../../utils/api/categories.json';
import {withRouter} from 'react-router-dom';

const CategoryDrop = (props)=> {
   
    const route = (event)=> {
        props.history.replace(`/products/filter?category=${event.target.value}`);
    }

    return(
        <>
        <select className="form-select" name="categories" onChange={(event)=>route(event)}>
            <option value="" disabled>Category</option>
             {categories.default.map(obj=>{
                 return(
                       <option key={obj.id} value={obj.name}>
                         {obj.name}
                        </option>
                 )
             })}

        </select>
        </>
    )
}

export default withRouter(CategoryDrop);