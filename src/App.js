import { createContext } from "react";
import C from "./C";

export const Data = createContext();

function App() {
  const name = "Hikmet";

  return (
    <>
      <Data.Provider value={name}>
		<C/>
      </Data.Provider>
    </>
  );
}

export default App;