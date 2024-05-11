// import logo from './logo.svg';
import './App.css';
// import Usr, { USR1 } from './test';
// import { useState } from 'react';
// import Boot from './bootstrap';
// import Navi from './navbar';
// import Img, { Crd } from './image';
// import TBLEE, { DATA, Tbl } from './Tble';
// import Foot from './footer';
// import { Spin } from './Spinner(Loader)';
// import { Prog } from './Progress';
// import Caro from './Carousels';
// import Login from './Login_Bootstrap';
// import Preventdefault from './Preventdefault'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import LNK from './link';
// import Pre from './Prevent';
// import Get from './APIGET';
// import Post from './APIPOST';
// import Greet from './Classmodule';
// import FactFeb from './FactFeb';
// import MEMO from './UseMemO';
// import Refrence from './Ref';
// import ApiGet from './Nodetestapi';
// import { LoginCard } from './loginpage';
// import { TableWithStripedRows } from './Tables';
// import { NavbarWithMegaMenu } from './TailwindNavbar';
import MyClass from './TestFile__1';
import MyClass2 from './TestFile__2';
import MyClass3 from './TestFile__3';
function App() {
  // const[data,setdata] = useState(10);
  // const[data1,setdata1] = useState(20);
  // const[data2,setdata2] = useState(30);
  // const[data3,setdata3] = useState(0);
  // function sum(){
  //   let t = data+data1+data2;
  //   console.log(t);
  //   setdata3(t);
  // }
  return (
    <div className="App">
      {/* <Navi />
      <h1>My first program</h1>
      <Usr name="Purab" age="19" rollno='15' branch='CSE' />
      <Usr name="Simmu" age="17" rollno='45' branch='Civil' />
      <USR1 />
      <h1>Total = {data3}</h1>
      <button onClick={sum}>Check</button>
      <Boot />
      <Img />
      <Crd />
      <Tbl Data={{name:"Purab",class:"React"}}/>
      <DATA />
      <TBLEE />
      <Foot />
      <Spin />
      <Prog />
      <Caro /> */}
      {/* <Login /> */}
      {/* <h1>some data</h1> */}
      {/* <Router>
    <Routes>
      <Route path='/' element={<Pre />}></Route>
      <Route path="/ram" element={<LNK />}></Route>
      <Route path='/Tab' element={<Greet />}></Route>
      
    </Routes>
   </Router>
   <Get />
   <Post />
   <MEMO />
   <Refrence />
   <ApiGet /> */}
      {/* <NavbarWithMegaMenu />
   <Router>
      <Routes>
        <Route path='/' element={<LoginCard />}/>
        <Route path='/tables' element={<TableWithStripedRows />}/>
      </Routes>
   </Router> */}
      <MyClass3 />
      <MyClass2 />
      <MyClass />
    </div>
  );
}

export default App;
