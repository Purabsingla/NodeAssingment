import { Card, Typography } from "@material-tailwind/react";
import { useState , useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import svg1 from './logo.svg'
import { Spinner } from "@material-tailwind/react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { json } from "react-router-dom";
import { ReactSVG } from 'react-svg'
import ModelTable from "./TableModel";
export function TableWithStripedRows() {
  const [userlist, SetUser] = useState([]);
  const [Name, setname] = useState("");
  // const [Age, setAge] = useState("");
  // const [Roll_number, setRoll] = useState("");
  // const [Course, setCourse] = useState("");
  // const [Address, setAddress] = useState("");
  // const [Email, setMail] = useState("");
  const [modal, setmodal] = useState(false);
  const TABLE_HEAD = [
    "Name",
    "Age",
    "Roll Number",
    "Course",
    "Address",
    "Email",
    "Action",
  ];  
  useEffect(()=>{
    fetch("http://localhost:3001/stutable")
      .then((response) => response.json())
      .then((res) => {
        console.log("Final result is = ", res);
        SetUser(res.listofuser);
      });
  } , [])
  function Find() {
    const req = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ Name }),
    };
    console.log("Find working");
    fetch("http://localhost:3001/stutable", req)
      .then((response) => response.json())
      .then((data) => {
        console.log("response from server is ", data);
        SetUser(data.listofuser);
        // setResponse(data)
      });
  }
  function del(name, age) {
    console.log("Delete api works" + name)
    const req = {
      method: "DELETE",
    };
    console.log("Find working");
    fetch("http://localhost:3001/stutable/" + name + "/" + age, req)
      .then((response) => response.json())
      .then((data) => {
        console.log("response from server is ", data);
        SetUser(data.listofuser);
        // setResponse(data)
      });
  }
  function store(Name,Age,Course,Address,Email,Roll_Number,bool) {
    setmodal(bool)
    console.log("store working")
    const req = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ Name, Age, Course, Address, Email, Roll_Number }),
    };
    fetch("http://localhost:3001/StudentTable", req)
      .then((response) => response.json())
      .then((data) => {
        console.log("response from server is ", data);
        if(data.report.acknowledged === true){
          SetUser(prevArray => [...prevArray, data.listofuser])
          alert("Working i think")
        }
        else{
          alert("something's wrong")
        }
      });
  }
  function Trigger(info) {
    console.log("Onclick works");
    console.log(
      `Name is: ${info.Name}, Age: ${info.Age}, Role: ${info.Roll_Number}`
    );
    del(info.Name, info.Age);
  };
  function Set(bool){
    console.log("Set function working")
    setmodal(bool);
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
      <Button variant="gradient" size="sm" onClick={Find}>
        Search
      </Button>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <Button
          className="flex items-center gap-3"
          size="sm"
          onClick={() => setmodal(!modal)}
        >
          Add member
        </Button>
      </div>
      <ModelTable uselist = {userlist} model = {modal} data = {Set} addData={store} />
      {/* <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
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
            {userlist.length > 0
              ? userlist.map((index) => (
                <tr key={index.Name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index.Name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index.Age}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index.Roll_Number}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index.Course}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index.Address}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index.Email}
                    </Typography>
                  </td>
                  <td className="p-4" >

                    <Button onClick={() => Trigger(index)} color="green"> Delete </Button>
                    <ReactSVG
                      afterInjection={(svg) => {
                        console.log(svg)
                      }}
                      beforeInjection={(svg) => {
                        svg.classList.add('svg-class-name')
                        svg.setAttribute('style', 'width: 20px')
                      }}
                      className="wrapper-class-name"
                      desc="Description"
                      evalScripts="always"
                      fallback={() => <span>Error!</span>}
                      httpRequestWithCredentials={true}
                      loading={() => <span>Loading</span>}
                      onClick={() => {
                        console.log('wrapper onClick')
                      }}
                      onError={(error) => {
                        console.error(error)
                      }}
                      renumerateIRIElements={false}
                      src={svg1}
                      title="Title"
                      useRequestCache={false}
                      wrapper="span"
                    />

                    {console.log("done")}
                  </td>
                </tr>
              ))
              : <Spinner color="blue" className="h-12 w-12"  />}
          </tbody>
        </table>
        {modal && (
          <div className="fixed inset-0 bg-black/40 bg-opacity-40 backdrop-blur-sm">
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
                <Button color="blue" onClick={check}>
                  Save
                </Button>
                <Button color="red" onClick={() => setmodal(!modal)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </Card> */}

    </>
  );
}
