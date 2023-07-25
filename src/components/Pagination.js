import React from 'react'
import { useGlobalContext } from '../context';

function Pagination() {
const {page,nbPages,getPrevPage,getNextPage} = useGlobalContext();

  return (
    <>
    <div className='pagination-btn'> 
    <button onClick={()=>getPrevPage()}>PREV</button>

<p className='pageno'>
  {page + 1} of {nbPages}
</p>


    <button onClick={()=>getNextPage()}>NEXT</button>

    
    
    </div>
    </>
  )
}
export default Pagination;