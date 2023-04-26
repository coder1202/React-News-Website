import React from 'react'
import { useGlobalContext } from './context'


const Pagination = () => {
  const {getPrevPage,getNextPage,page,nbPages}=useGlobalContext();
  return (
    <>
    <div className="pagination_btn">

    <button className='container btn btn-dark' onClick={()=>getPrevPage()} >Previous Page</button>
    <p className='container center'>
      {page +1} to {nbPages}
    </p>
    <button className='container btn btn-dark ' onClick={()=>getNextPage()} >Next Page</button>
    </div>
    </>
  )
}

export default Pagination
