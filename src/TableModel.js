import { Card, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
const ModelTable = (props) => {
  const TABLE_HEAD = [
    "Name",
    "Age",
    "Roll Number",
    "Course",
    "Address",
    "Email",
    "Action",
  ];
  let model = props.model
  const [Name, setname] = useState("");
  const [Age, setAge] = useState("");
  const [Roll_Number, setRoll] = useState("");
  const [Course, setCourse] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setMail] = useState("");
  const check = () => {
    if (
      Name.length !== 0 &&
      Age.length !== 0 &&
      Roll_Number.length !== 0 &&
      Course.length !== 0 &&
      Address.length !== 0 &&
      Email.length !== 0
    ) {
      alert("foam is not empty now enjoy ^-^");
      props.addData(Name,Age,Course,Address,Email,Roll_Number,false)
    } else {
      alert("Dake kha le inmese koi String empty hai");
    }
  };
  return (
    <>
      <Card className="h-full w-full overflow-scroll">
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
            {props.uselist.length > 0
              ? props.uselist.map((index) => (
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

                    <Button color="green"> Delete </Button>
                    {/*onClick={() => Trigger(index)}*/}
                  </td>
                </tr>
              ))
              : <Spinner color="blue" className="h-12 w-12" />}
          </tbody>
        </table>
        {props.model && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm">
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
                <Button color="red" onClick={() => { props.data(false) }}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </Card>
    </>
  )
}
export default ModelTable