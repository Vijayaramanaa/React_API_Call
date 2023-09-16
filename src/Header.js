import React from 'react'
import Post from "./Post.js"
import Comments from './Comments.js'
import './index.css'
const Header = ({click,setClick,clickedme,clicktwo,setClicktwo,clickedmetwo}) => {
  return (
    <div className='header'>
         <Post
          
          click={click}
          setClick={setClick}
          clickedme = {clickedme}
         />
       <Comments
        clicktwo={clicktwo}
        setClicktwo={setClicktwo}
        clickedmetwo = {clickedmetwo}
       />
    </div>
  )
}

export default Header