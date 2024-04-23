// import { BrowserRouter as Router } from "react-router-dom";
import Usr, { USR1 } from './test';
import Boot from './bootstrap';
// import Navi from './navbar';
import Img, { Crd } from './image';
import TBLEE, { DATA, Tbl } from './Tble';
import Foot from './footer';
import { Spin } from './Spinner(Loader)';
import { Prog } from './Progress';
import Caro from './Carousels';
import { useNavigate } from 'react-router-dom';

function LNK(){
    // const navigate = useNavigate();
    // function Tbl (){
    //     navigate('/Tab');
    // }
    return(
            <div >
            {/* <Navi /> */}
            {/* <button onClick={Tbl}>Check Api</button> */}
            <h1>My first program</h1>
            <Usr name="Purab" age="19" rollno='15' branch='CSE' />
            <Usr name="Simmu" age="17" rollno='45' branch='Civil' />
            <USR1 />
            <Boot />
            <Img />
            <Crd />
            <Tbl Data={{name:"Purab",class:"React"}}/>
            <DATA />
            <TBLEE />
            <Foot />
            <Spin />
            <Prog />
            <Caro />

            </div>
    )
}
export default LNK;