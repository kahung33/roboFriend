import React from 'react';

const SearchBox = ({searchChange, setSearchfield}) =>{
    return(
        <div className = 'pa2'>
        <input 
        className = 'pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='seacrh robots'
        onChange = {searchChange}
        // onChange = {(event)=>setSearchfield(event.target.value)}
        />
        </div>
    )
}

export default SearchBox;