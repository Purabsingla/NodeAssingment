function Post(){
    function PP(){
        const req = {
            method :'POST',
            headers:{'Content-type':'application/json'},
            body : JSON.stringify({title:'name'})
        }
        fetch('https://reqres.in/api/users',req).then(response=>response.json()).then(data => {
            console.log("response from server is ",data)
            // setResponse(data)
        });
    }
    function PUT(){
        const req = {
            method :'POST',
            headers:{'Content-type':'application/json'},
            body : JSON.stringify({title:'purab'})
        }
        fetch('https://reqres.in/api/users/2',req).then(response=>response.json()).then(data => {
            console.log("response from server is ",data)
            // setResponse(data)
        });
    }
    return(
        <div>
            <button onClick={PP}><h1>Save data</h1></button>
            <button onClick={PUT}><h2>Update Data</h2></button>
        </div>
        )
}
export default Post;