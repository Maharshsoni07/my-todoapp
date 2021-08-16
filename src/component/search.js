import React, {useState} from 'react'
import Result from  "./result";


const Search=() =>{
    const[searchTerm,setSearchTerms]= useState("");
    const InputEvent = (event) => {
        const data =event.target.value;
        // console.log(data)
        setSearchTerms(data)
    }

    return(
    <>
    <input type="text" placeholder="search" className="search" onChange={InputEvent} value={searchTerm}/>
    <Result name={setSearchTerms}/>
    </>
    )
 }
export default Search;