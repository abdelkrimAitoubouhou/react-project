import React, {useState} from 'react';
import {withRouter} from "./WithRouter";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from "react-router-dom";

const CreateStudent = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/patient-list');


    const [username, setUsername] = useState('');
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const patientObject = {username,  email, password, confirmPassword, status,};
   const handlesubmit = (e) => {
       e.preventDefault();
       fetch("http://localhost:8082/patient/admin/addPatient",{
           method : "POST",
           headers : {"content-type":"application/json"},
           body : JSON.stringify(patientObject)
       }).then(() => {
           handleClick()
           console.log("data add successfully")
       }).catch((err) => {
           console.log(err.message);
       })

    }



    return (
        <div>

            <br/>

            <div className="patientForm" >
                <form className="container" onSubmit={handlesubmit}>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div>
                                <h3 className="patientFormHeader"> Patient Form  </h3>
                            </div>
                            <br/>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" required/>
                    </div>

                    <br/>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}  className="form-control" required/>
                    </div>

                            <br/>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" required/>
                            </div>

                            <br/>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} className="form-control" required/>
                            </div>



                            <br/>
                    <div className="form-group">
                        <label>Status</label>
                        <input type="text" value={status} onChange={e=>setStatus(e.target.value)} className="form-control" required/>

                    </div>
                            <br/>
                    <div className="form-group">
                        <button className="btn btn-success"  type="submit">submit</button>
                    </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default withRouter(CreateStudent);