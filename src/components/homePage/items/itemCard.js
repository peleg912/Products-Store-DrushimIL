import React from 'react';
import EditModal from './editModal';

const ItemCard = (props)=> {
    return(
        <>
        <div className="card shadow" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..." style={{padding:"10px"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text" style={{display:"inline-block"}}>
                    <b>${props.price}</b>  <br/>
                     <mark>{props.category}</mark>
                </p>
                <button 
                className="btn" 
                style={{marginLeft:"60px", background:"rgb(255, 212, 128)"}}
                data-bs-toggle="modal" 
                data-bs-target="#editModal">
                    Edit
                </button>
            </div>
         </div>

         <EditModal/>
         </>
    )
}

export default ItemCard;