import React, {useState} from 'react';
import ItemCard from './itemCard';
import {getAllCategories} from '../../../services/categoriesApiService';
import './items.css';

const Items = (props)=> {

    const [state] = useState({categories: getAllCategories().default});


     const convertCategoryId = (id)=> {
        return (state.categories.find(obj=> obj.id === id)).name;      
    }


        return(
        <div className="container">
            <div className="row">
                {props.products.map(obj=> {
                    return(
                        <ItemCard
                        className="col"
                        key={obj.id}
                        name={obj.name}
                        price={obj.price}
                        img={obj.image}
                        category={convertCategoryId(obj.categoryId)}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Items;