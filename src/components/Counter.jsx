
import "./Counter.css";
import React , {useState} from "react";

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
    }
   
    return(
        <div className="container">
        <button onClick={addMinus}> - </button>
        <button onClick={addPlus}> + </button>
        {arr}
        </div>
    )
}

export default Counter;