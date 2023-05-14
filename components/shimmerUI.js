import React from 'react'
import '../style.css'

function ShimmerUI() {
  return (
    <>
         <div className="resturant-list">
          {Array(15).fill('').map((e, index)=> <div key={index} className='shimmer-cards'></div>)}
            
        </div>
    </>
    
    
  )
}

export default ShimmerUI