import { useContext } from "react";
import { Data,Data1 } from "./App";

const C = () => {
    const userName = useContext(Data);
    const age = useContext(Data1);
    
    return <>
        <h1>Name: {userName}</h1>    
        <h1>Age: {age}</h1>    
    </>

}

export default C