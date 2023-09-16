

function Post({click,clickedme}) {
   
  return (
    <div className='com'>
        
        <button onClick={()=>clickedme()}>{click?"See the Post ":"Hide the Post"}</button>
    </div>
  )
}

export default Post