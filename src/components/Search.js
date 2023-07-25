import React from 'react'
import { useGlobalContext } from '../context';


function Search() {
  const {query,searchPost} = useGlobalContext();
  return (
   <>
   <h1 id='nav'>Tech News Daily</h1>
   <h2 id='tagline'><span className='myspan'>!!!</span> Get All Latest Tech Related News Here Daily <span className='myspan'>!!!</span></h2>
<form onSubmit={(e)=>e.preventDefault()}>
<div>
  <input   type='text' placeholder='Search' value={query} 
  onChange={(e) => searchPost(e.target.value)}/>
  

</div>

</form>

   </>
  )
}

export default Search;