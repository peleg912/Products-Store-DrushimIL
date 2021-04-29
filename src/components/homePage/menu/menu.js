import React from 'react';
import CategoryDrop from './dropdowns/categoryDrop';
import SortDrop from './dropdowns/sortDrop';
import SearchBar from './searchBar/searchBar';
import './menu.css';

const Menu = (props)=> {
    return(
        <div className="conatainer">
             {/* <h1><b>Products Store</b></h1>
             <hr/> */}
            <div className="row ">
                <div className="col-5">
                 <SearchBar />
                </div>

                <div className="col-2"></div>

                <div className="col-3">
                 <CategoryDrop />
                </div>

                <div className="col-2">
                 <SortDrop/>
                </div>
            </div>
        </div>
    )
}

export default Menu;