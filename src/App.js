import { useState } from "react";

function App() {
  
  const [username, setUsername] = useState("");
  

  const handelChange = (e) => {
    setUsername(e.target.value);
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    alert(username);
    setUsername("");
  }

  return (
    <>
      
      <h1>From Demo</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" value={username} onChange={handelChange} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;