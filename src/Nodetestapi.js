import { useState } from "react";

const ApiGet = () =>{
    const[userlist,Set]=useState([]);
    function Load(){
        fetch("http://localhost:3001/getuserlist").then((response)=>response.json()).then((res)=>{ console.log("Final result is = ",res.data); Set(res.data) })
    }
    Load();
}
export default ApiGet;