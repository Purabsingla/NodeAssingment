import { useNavigate } from "react-router-dom";
import { useState } from "react"
function Pre(){
    const[user,USR] = useState(null);
    const[passwd,PSWD]=useState(null);
    const[nrml,UESSS] = useState(false);
    const[nml,USDD] = useState(false);
    const navigate = useNavigate();
    function hello(e){
        console.log("inside function");
        e.preventDefault();
        let USER = user;
        let PASS = passwd;
        if(USER!=="purab" && PASS!=="singla"){
            console.log("inside 1st if");
            UESSS(true);
            USDD(true);
        }
        else if(USER!=="purab"){
            console.log("inside 2nd if");
            UESSS(true);
            USDD(false);
        }
        else if(PASS!=="singla"){
            console.log("inside 3rd if");
            USDD(true);
            UESSS(false);
        }
        else{
            console.log("inside else");
            UESSS(false);
            USDD(false);
           navigate('/ram');
        }
        console.log(user , passwd , nrml , nml);
    }
    return(
        <div>
        <h1>App Loaded</h1><br/>
        <form>
            <input type="text" placeholder="Username" onChange={(e)=> USR(e.target.value)}/><br/>
            {
                nrml?<span style={{backgroundColor:"red" , fontSize:"40px"}}>Invalid Username</span>:""
            }
            <br/>
            <input type="password" placeholder="Password" onChange={(e)=> PSWD(e.target.value)} /><br/>
            {
                nml?<span style={{backgroundColor:"red" , fontSize:"40px"}}>Invalid Password</span>:""
            }
            
            <br/>
            <button onClick={hello}>Login</button>
            </form>
            <button onClick={()=>navigate('/Tab')}>Check</button>
            <button onClick={()=>navigate('/febo')}>Find Factorial and febonacci</button>
        
        </div>
    )
}
export default Pre;