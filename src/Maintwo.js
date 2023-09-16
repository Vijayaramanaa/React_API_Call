import React,{useState} from 'react'
import { useEffect } from 'react'

function Main() {
    const APILINK = 'https://jsonplaceholder.typicode.com/todos'
    const [getpst,setGetpst]= useState([])
    const [loading,setLoading] = useState(false)
        const received = async() =>{
        
            
        try{
            
        const response = await fetch(APILINK)
        console.log(response)
        if(!response) throw Error("Data not received")
        const data = await response.json()
        console.log(data.title)
        setGetpst(data)
        

        }
        catch(err){
            console.log(err.message)
        }
        finally{
            setLoading(true)
        }
    
    }
    
    useEffect(()=>{
  setTimeout(()=>{
        received()
    },3000)
    },[]) 
     

    
    
  return (
    
    <div className='Maintwo'>
        { loading ? <div>
        <h1>Commend Section</h1>
        <ul>{getpst.map((items)=> { return(<li className='list' key={items.id}>{`${items.id}.) ${items.title}`}</li>)})}</ul>
        <h1>the end</h1></div> : <div className='div1'><p>loading please wait</p> <p className='p1'></p></div>
        }
      </div>
    
  )
}

export default Main