import { useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import studentservice from "../service/studentservice";

const EditStudnet  = () =>{
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        studentservice.getRecordById(id).then((res)=>{
            console.log("Record Fetch successfully");
            setMsg("Record updated successfully");
            setstudent(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);

    

    const [student,setstudent]=useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
        country:"",
        address:"",
        gender:"",
    });
    
    const [msg,setMsg]=useState("");
    
    const handleChange = (e)=>{
        const value=e.target.value;
        setstudent({...student,[e.target.name]:value});
    }
    
    const navigate = useNavigate();
    const StudentRegister = (e)=>{
        e.preventDefault();
        console.log(student);
        studentservice.updateRecord(student,id).then((res)=>{
            
            navigate("/");

        }).catch((error)=>{
            console.log(error);
        });
    }

    return (
        <>
            <div className="container mt-3"> 
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center"> Edit Student</div>
                            {
                                msg && <p className="fs-4 text-center text-success">{msg}</p>
                            }
                            <div className="card-body">
                                <form onSubmit={(e)=> StudentRegister(e)}>
                                    <div className="md-3 mt-3">
                                        <label>Enter First Name</label>
                                        <input type="text" name="firstName" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={student.firstName}
                                        />
                                    </div>
    
                                    <div className="md-3 mt-3">
                                        <label>Enter Last Name</label>
                                        <input type="text" name="lastName" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={student.lastName}
                                        />
                                    </div>
    
                                    <div className="md-3 mt-3">
                                        <label>Enter Email</label>
                                        <input type="text" name="emailId" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={student.emailId}
                                        />
                                    </div>
    
                                    <div className="md-3 mt-3">
                                        <label>Enter Country Name</label>
                                        <input type="text" name="country" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={student.country}
                                        />
                                    </div>
    
                                    <div className="md-3 mt-3">
                                        <label>Enter Address</label>
                                        <input type="text" name="address" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={student.address}
                                        />
                                    </div>
                                    <div className="md-3 mt-3">
                                        <label>Enter Gender</label>
                                        <input type="text" name="gender" className="form-control" 
                                        onChange={(e)=>handleChange(e)}
                                        value={student.gender}
                                        />
                                    </div>
                                    <button className="btn btn-primary col-md-12 mt-3"> Update </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditStudnet