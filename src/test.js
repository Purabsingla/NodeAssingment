import './USER.css';
function Usr(props){
    return(
        <div className='purab'>
            <h1>Name is = {props.name}</h1>
            <h1>age = {props.age}</h1>
            <h1>Roll no = {props.rollno}</h1>
            <h1>Branch = {props.branch}</h1>
        </div>
        
    );
}
export function USR1(){
    return(
        <h1>Faltu cheez check kar rha hu guys</h1>
    )
}
export default Usr;