import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import LNK from './link';

function Login() {
  const[usrnm,setUser] = useState(null);
  const[pswd,setPswd] = useState(null);
  function getdata(txt){
    setUser(txt.target.value);
  }
  function gotdata(txt){
    setPswd(txt.target.value);
  }
  function show(){
    if(!(usrnm.localeCompare("purab") && pswd.localeCompare("singla"))){
      console.log("sahi hai");
      <Routes>
      <Route path='/home' element={<LNK />}></Route>
      </Routes>
    }
  }
  return (
    <div className='mt-90'>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3">
        <Form.Control type="text" onChange={getdata} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" onChange={gotdata} placeholder="Password" />
      </FloatingLabel>
      <Button variant="outline-primary" onClick={show}>Primary</Button>{' '}
    </div>
  );
}

export default Login;