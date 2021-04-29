import React from 'react';
import {withRouter} from 'react-router-dom';


const SortDrop = (props)=> {

    const route = (event)=> {
        props.history.replace(`/products/filter?sortBy=${event.target.value}`);
    }

    return(
        <select className="form-select" onChange={(event)=>route(event)}>
            <option defaultValue disabled>Sort By</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
        </select>
    )
}

export default withRouter(SortDrop);