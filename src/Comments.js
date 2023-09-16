import React from 'react'

const Comments = ({clicktwo,clickedmetwo}) => {
  return (
    <div className='com'>
       <button onClick={()=>clickedmetwo()}>{clicktwo?"See the commends ":"Hide the commends"}</button>
    </div>
  )
}

export default Comments