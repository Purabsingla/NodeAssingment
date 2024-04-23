import { useState } from "react";

function Get(){
    const[userlist,Set]=useState([]);
    function Load(){
        fetch("https://reqres.in/api/users").then((response)=>response.json()).then((res)=>{ console.log("Final result is = ",res.data); Set(res.data) })
    }
    return(
        <div>
            <h1>Table Api after data load is</h1>
            <button onClick={Load}>Load Data</button>
            <table>
                <thead>
                    <tr>
                        <td>Sr no</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>User Photo</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.length>0?userlist.map((item,i) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.first_name} {item.lastname}</td>
                                <td>{item.email}</td>
                                <td><img src={item.avatar} alt ="Justforfun"/></td>
                            </tr>
                            ):"No data found"
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Get;