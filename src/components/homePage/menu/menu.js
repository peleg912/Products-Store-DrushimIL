import React from 'react';
import CategoryDrop from './dropdowns/categoryDrop';
import SortDrop from './dropdowns/sortDrop';
import SearchBar from './searchBar/searchBar';
import './menu.css';

const Menu = (props)=> {
    return(
        <div className="conatainer">
            <div className="row ">
                <div className="col-md-5 col-sm-3">
                 <SearchBar />
                </div>

                <div className="col-md-2 col-sm-1"></div>

                <div className="col-md-3 col-sm-4">
                 <CategoryDrop />
                </div>

                <div className="col-md-2 col-sm-3">
                 <SortDrop/>
                </div>
            </div>
        </div>
    )
}

export default Menu;