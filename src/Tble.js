import Table from 'react-bootstrap/Table';
export function Tbl(props){
    return(
        <div>
        <h1>Name = {props.Data.name}</h1><br/>
        <h1>   Class = {props.Data.class}</h1>
        </div>
    )
}
export function DATA(){
    const usrdta = [{
        name:"Purab",
        class:"B.Tech. Cse 6th Sem",
        age:"19"
    },
    {
        name:"Deep",
        class:"B.Tech. Cse 8th Sem",
        age:"26"
    },
    {
        name:"Simar",
        class:"B.Tech. Cse 2nd Sem",
        age:"17"
    },
    {
        name:"Krish",
        class:"Diploma Cse 6th Sem",
        age:"17"
    }
]
    return(
        <div>
            <h1>Hello</h1>
            {
            usrdta.map(items =>
        <div>
            <h1>Name = {items.name}</h1><br/>
            <h1>Class = {items.class}</h1><br/>
            <h1>Age = {items.age}</h1>
        </div>
      )   
            }
        </div>
      
    )
}

function TBLEE() {
    const usrdta = [{
        name:"Purab",
        class:"B.Tech. Cse 6th Sem",
        age:"19"
    }
    ,
    {
        name:"Deep",
        class:"B.Tech. Cse 8th Sem",
        age:"26"
    },
    {
        name:"Simar",
        class:"B.Tech. Cse 2nd Sem",
        age:"17"
    },
    {
        name:"Krish",
        class:"Diploma Cse 6th Sem",
        age:"17"
    }
]
  return (
    <div>
        <Table striped bordered hover >
        <thead>
            <tr>
                <th>Sr. No</th>
                <th>Name</th>
                <th> Class</th>
                <th> Age aka Umar</th>
            </tr>
        </thead>
      
        {
            usrdta.map((items,i) =>
                <tbody>   
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{items.name} </td>
                        <td>{items.class}</td>
                        <td>{items.age}</td>
                    </tr>
                </tbody>
            ) 
        }
      
    </Table>
    </div>
  );
}

export default TBLEE;