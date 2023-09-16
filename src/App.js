
import './App.css';
import Main from './Main'
import Maintwo from './Maintwo'
import Header from './Header'
import {useState} from 'react'
import './index.css'

function App() {

 
  const[click,setClick] = useState(false)
  function clickedme(){
      const lclick = !click
      setClick(lclick)
      
  }
  const[clicktwo,setClicktwo] = useState(false)
  function clickedmetwo(){
      const lclick = !clicktwo
      setClicktwo(lclick)
      
  }
 
  return (
    < div >
      <Header 
        click={click}
        setClick={setClick}
        clickedme = {clickedme}
        clicktwo={clicktwo}
        setClicktwo={setClicktwo}
        clickedmetwo = {clickedmetwo}
      />{click ?
       <Main
        click={click}

       />: <p className='pp'>Please do some action to see post</p>}
        {clicktwo ?
       <Maintwo
        clicktwo={clicktwo}

       />: <p className='pp'>Please do some action to see post</p>}
    </div>
  );
}

export default App;
