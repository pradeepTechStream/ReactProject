import React, { useEffect, useState } from "react"
import studentservice from "../service/studentservice";
import { Link } from "react-router-dom";


const Home = () =>{

    const [studentList,setStudentList]=useState([]);
    useEffect(()=>{
        init();
        
    },[]);

    const init=()=>{
        studentservice.getRecords().then((res)=>{
            console.log(res.data);
            setStudentList(res.data);
            console.log("Record Fetch successfully");
        }).catch((error)=>{
            console.log(error);
        });
    }
    
    const deleteStudent=(id) =>{
        studentservice.deleteRecord(id).then((res)=>{
            setMsg("Record Deleted successfully");
            console.log("Record Deleted successfully");
            init();
        }).catch((error)=>{
            console.log(error);
        });
    }

    const [msg,setMsg]=useState("");

    return (
    <>
    <div className="container mt-3">  
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                    <div className="card-header fs-3 text-center"> Added Student</div>
                        {
                            msg && <p className="fs-4 text-center text-success">{msg}</p>
                        }
                        <div className="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Country</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                studentList.map((s,num)=>(
                                <tr>
                                    <td>{num+1}</td>
                                    <td>{s.firstName}</td>
                                    <td>{s.lastName}</td>
                                    <td>{s.emailId}</td>
                                    <td>{s.gender}</td>
                                    <td>{s.country}</td>
                                    <td>
                                        <Link to={'edit/'+s.id} className="btn btn-sm btn-primary">Edit</Link>
                                        <button onClick={()=>deleteStudent(s.id)} className="btn btn-sm btn-danger ms-3">Delete</button>
                                    </td>
                                </tr>
                                ))
                            }
                                
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Home