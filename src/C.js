import { Data } from "./App";

const C = () => {
    return <>
        <Data.Consumer>
            { (name)=>{
                return <h1>{name}</h1>
            } }
        </Data.Consumer>
    </>

}

export default C