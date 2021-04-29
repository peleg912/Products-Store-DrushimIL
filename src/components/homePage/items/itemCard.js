import React from 'react';

const ItemCard = (props)=> {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..." style={{padding:"10px"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <b>${props.price}</b>  <br/>
                     {props.category}
                </p>
                <button className="btn btn-primary">Edit</button>
            </div>
         </div>
    )
}

export default ItemCard;