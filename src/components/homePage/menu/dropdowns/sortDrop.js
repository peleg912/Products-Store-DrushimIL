import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {getSortBy} from '../../../../services/sortByApiService';


const SortDrop = (props)=> {

    const [state, setState] = useState({sortBy: []});

    useEffect(()=> {
        const sortBy = getSortBy();
        setState({sortBy: sortBy.default});
    }, []);

    const route = (event)=> {
        props.history.replace(`/products?sortBy=${event.target.value}`);
    }

    return(
        <select className="form-select" onChange={(event)=>route(event)}>
            <option value="">Sort By</option>
            {state.sortBy.map(string=>{
                return(
                    <option key={string} value={string.toLowerCase()}>{string}</option>
                )
            })}
        </select>
    )
}

export default withRouter(SortDrop);