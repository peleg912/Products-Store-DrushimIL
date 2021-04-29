import React,{useState, useEffect} from 'react';
import {getSortBy} from '../../../services/sortByApiService';

const EditModal = (props)=> {

    const [state, setState] = useState({sortBy:[]});

    useEffect(()=> {
        const sortBy = getSortBy();
        setState({sortBy: sortBy.default});
    }, []);

    return(
        <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        {state.sortBy.map(string=> {
                            return(
                            <>
                            <input key={string} className="form-control" type="text" placeholder={`Product ${string}`}/> <br/>
                            </>
                            )
                        })}

                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn" data-bs-dismiss="modal" style={{background:"rgb(255, 212, 128)"}}>Save changes</button>
                </div>
                </div>
            </div>
        </div>

    )
}

export default EditModal;