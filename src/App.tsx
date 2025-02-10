import { useState } from "react";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Alert from "./components/Alert";
import Alert2 from "./components/Alert2";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";


function App(){
  let items = ["new york", "SF", "Paris", "lille"];
  const handelSelectItem = (item:string)=>{
    console.log(item)
  }
  // using state varaible for the alert
  const [alertIsVisible,setAlertIsVisible] = useState(false)
  //return <div><ListGroup items={items} heading="Cities" onSelectItem={handelSelectItem}/></div>
  //return <div><Alert>Hello<span>World</span> </Alert></div>
  //return <div><Button>hello</Button></div>
  //return <div><Button2 color="secondary" onClick={()=>console.log('clicked')}>My button</Button2></div>
  return (
    <div>
      {alertIsVisible && <Alert2 onClose={()=> setAlertIsVisible(false)}>my alert</Alert2>}
      <Button3 color="primary" onClick={()=>setAlertIsVisible(true)}>My button</Button3>
    </div>
  )
}

export default App;