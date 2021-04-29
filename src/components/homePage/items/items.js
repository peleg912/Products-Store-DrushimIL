import React from 'react';
import ItemCard from './itemCard';
import './items.css';


const Items = (props)=> {
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
                        category={obj.categoryId}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Items;