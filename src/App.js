import { createContext } from "react";
import C from "./C";

export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Hikmet";
  const age = 18;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
            <C/>
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

export default App;