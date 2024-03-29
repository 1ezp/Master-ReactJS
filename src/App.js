import { useState } from "react";



function App() {
  
  const [frinds,setFrinds] = useState(["alex","Ali"]);

  const addOne = () => {
    setFrinds([...frinds,"Hikmet"])
  }

  const removeOne = () => {
    setFrinds(frinds.filter(f => f !== "Hikmet"))
  }
  
  const updateOne = () => {
    setFrinds(frinds.map( f => f === "alex" ? "Alex":f ))
  }

  return (
    <>
    {
    frinds.map( f => (<li>{f}</li>) )
    }

    <button onClick={addOne}>Add one</button>
    <button onClick={removeOne}>Remove one</button>
    <button onClick={updateOne}>Update one</button>
    </>
  )
}

export default App;
