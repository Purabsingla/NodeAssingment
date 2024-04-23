import { useRef } from "react";

function Refrence(){
    const inputRef = useRef();
    function change(){
        inputRef.current.value = "Purab";
        inputRef.current.style.backgroundColor = "aqua";
        inputRef.current.style.color = "black";
    }
    return(
        <>
            <h1>App Component</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={change}>Change Color</button>
        </>
    )
}
export default Refrence;