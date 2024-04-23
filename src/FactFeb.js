// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function FactFeb(){
    const[fact,setfact] = useState(0);
    let total = Number(1);
    // console.log("Factorial = ",total);
    function fec(){
        { 
            setfact.map((fact) =>{
                if(fact>0){
                    total = total;
                    fact--;
                }
              })
             }
        console.log("Factorial = ",total);
    }   
    return(
        <>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Factorial</Form.Label>
            <Form.Control className='w-50 p-3 ms-5' type="text" placeholder="name@example.com" onChange={(e)=>setfact(e.target.value)}/>
            </Form.Group>
            </Form>
            <Button onClick={fec}>Get data</Button>
            {/* {
                setfact.map(item =>{
                    if(item!=Number(fact)){
                        total = total*item;
                    }
                })
            } */}
        </>
    )
}
export default FactFeb;