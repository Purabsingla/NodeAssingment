import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import {
    Input,
    Button
} from "@material-tailwind/react";

export function TableWithStripedRows() {
    const [userlist, SetUser] = useState([]);
    const [Name, setname] = useState("");
    const [Age , setAge] = useState("");
    const [Roll_number , setRoll] = useState("");
    const [course,setCourse] = useState("");
    const [Address , setAddress] = useState("");
    const [Email , setMail] = useState("");
    const [modal, setmodal] = useState(false);
    const TABLE_HEAD = ["Name", "Age", "Roll Number", "Course", "Address", "Email", "Action"];

    function Load() {
        fetch("http://localhost:3001/stutable").then((response) => response.json()).then((res) => { console.log("Final result is = ", res); SetUser(res.listofuser) })
    }
    function Find() {
        // userlist.length!=0?({clearArray}):""
        const req = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ Name })
        }
        console.log("Find working")
        fetch('http://localhost:3001/stutable', req).then(response => response.json()).then(data => {
            console.log("response from server is ", data)
            SetUser(data.listofuser)
            // setResponse(data)
        });
    }
    function del(name, age) {
        // userlist.length!=0?({clearArray}):""
        const req = {
            method: 'DELETE',
            // headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ name, age })
        }
        console.log("Find working")
        fetch('http://localhost:3001/stutable', req).then(response => response.json()).then(data => {
            console.log("response from server is ", data)
            SetUser(data.listofuser)
            // setResponse(data)
        });
    }
    const Trigger = (info) => {
        console.log("Onclick works")
        console.log(`Name is: ${info.Name}, Age: ${info.Age}, Role: ${info.Roll_Number}`)
        del(info.Name, info.Age)
    }
    const check = ()=>{
        if(Name.length!==0 && Age.length!==0 && Roll_number.length!==0 && course.length!==0 && Address.length!==0 && Email.length!==0 ){
            alert("foam is not empty now enjoy ^-^")
        }
        else{
            alert("Dake kha le inmese koi String empty hai")
        }
    }
    return (
        <>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Enter Name
            </Typography>
            <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
                onChange={(e) => setname(e.target.value)}
            />
            <Button variant="outlined" size="sm" onClick={Find}>
                Search
            </Button>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button variant="outlined" size="sm" onClick={Load}>
                    view all
                </Button>
                <Button className="flex items-center gap-3" size="sm" onClick={() => setmodal(!modal)}>
                    Add member
                </Button>

            </div>

            <Card className="h-full w-full overflow-scroll">

                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {userlist.length > 0 ? userlist.map((index) => (

                            <tr key={index.Name} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index.Name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index.Age}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index.Roll_Number}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index.Course}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index.Address}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {index.Email}
                                    </Typography>
                                </td>
                                <td className="p-4" onClick={() => Trigger(index)}>
                                    <Typography as="b" variant="small" color="blue-gray" className="font-medium cursor-pointer" >
                                        Delete
                                    </Typography>
                                </td>
                            </tr>

                        )) : ""}
                    </tbody>
                </table>
                {
                    modal && <div className="fixed inset-0 bg-black/40 bg-opacity-40 backdrop-blur-sm">
                        <div className="absolute top-28 left-1/3 bg-white p-2 px-4 rounded-md">
                            <Typography variant="h2" color="black" className="mb-3">
                                Enter New Student Details
                            </Typography>
                            <Typography variant="h6" color="blue-gray" className="-mb-1">
                                Enter Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setname(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-1">
                                Enter Age
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-1">
                                Enter Roll number
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setRoll(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-1">
                                Enter Course
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setCourse(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-1">
                                Enter Address
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-1">
                                Enter Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setMail(e.target.value)}
                            />
                            <div className="flex justify-between mt-2">
                                <Button color="blue" onClick={check}>Save</Button><Button color="red" onClick={()=>setmodal(!modal)}>Cancel</Button>
                            </div>
                        </div>
                    </div>
                }
            </Card>
        </>
    );
}