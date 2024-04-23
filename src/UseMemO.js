import { useEffect, useMemo, useState } from "react";

function MEMO(){
    const[count,setCount] = useState(0);
    const[item,useeeItem] = useState(0);
    const MultiCountMemo = useMemo(function multicount(){
        console.log("Multicalled Called");
        return count*11;
    },[count]);
    useEffect(()=>{
        console.log("Item onClick");
    },[item]);
    return(
        <>
            <h1>Working of memo hook</h1>
            <h3>Count is :{count} and {MultiCountMemo}</h3><br/>
            <h3>Item is :{item}</h3>
            <button onClick={()=>setCount(count+1)}>Inc count</button><button onClick={()=>useeeItem(item+10)}>Inc Item</button>

        </>
    );
}
export default MEMO;