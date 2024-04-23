import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import LNK from './link';
function Preventdefault()
{
    const[user,USR] = useState(null);
    const[passwd,PSWD]=useState(null);
    const[nrml,UESS] = useState(false);
    const[nml,USD] = useState(false);
    // const navigate = useNavigate();
    // function usrhandle(e){
    //     e.preventDefault();//used to stop loading a frame
    //     console.log("insidefxn");
    //     let item=user;
    //     let psd = passwd;
    //     if(item.length<3 && psd.length<8){
    //         console.log("inside if");
    //         UESS(true);
    //         USD(true);
    //     }
    //     else if(psd.length<8){
    //         USD(true);
    //     }
    //     else if(item.length<3){
    //         UESS(true);
    //     }
    //     else{
    //         UESS(false);
    //         USD(false);
    //         // navigate('/homieeee');   
    //         // console.log(user,passwd);

    //     }
    // }
    return(
        <div>
            <h1>App loaded</h1>
        
        </div>
    )
}
export default Preventdefault;