import React, {useState} from 'react';
import { useNavigate, useParams} from "react-router-dom";
import {withRouter} from "./WithRouter";
import PatientService from "../services/PatientService";

const Edit = () => {

    const navigate = useNavigate();
    const handleClick = () => navigate('/patient-list');
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('');
    const patientObject = { username, status,};
    const { patId } = useParams();





        const componentDidMount = () => {
          PatientService.getPatientById(JSON.stringify(patId)).then((res)=>{
            let patient = res.data;
            this.setUsername = patient.username
              this.setStatus(patient.status);
              this.setEmail(patient.email);
              this.setPassword(patient.password);
              this.setConfirmPassword(patient.confirmPassword);
        });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8082/patient/admin/updatePatient?id="+patId,{
            method : "PUT",
            headers : {"content-type":"application/json"},
            body : JSON.stringify(patientObject)
        }).then(() => {
            handleClick()
            console.log("data add successfully")
        }).catch((err) => {
            console.log(err.message);
        })

    }

    /*const updatePatient=(e)=>{
        e.preventDefault();
        let patient = {
            username: this.username, email: this.email, password: this.password, status: this.status,
        };
        console.log('patient => ' + JSON.stringify(patient));
        PatientService.updatePatient(patient, {patId}).then( res => {
            handleClick();
        });
    }
*/



    return (
        <div>
            <form className="container" onSubmit={handlesubmit}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h3>Add/Edit Employee</h3>
                        <div className="form-group">
                            <label>Id</label>
                            <input disabled={true} value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input  value={username}  onChange={e => setUsername(e.target.value)}
                                   className="form-control" ></input>
                            {username.length === 0 && <span className="errormessage"> Please enter the name</span>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input disabled={true} value={email} onChange={e => setEmail(e.target.value)}
                                   className="form-control" ></input>
                            {email.length === 0 && <span className="errormessage"> Please enter the email</span>}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input disabled={true} value={password} onChange={e => setPassword(e.target.value)}
                                   className="form-control" ></input>

                        </div>

                        <div className="form-group">
                            <label>Status</label>
                            <input value={status} onChange={e => setStatus(e.target.value)}
                                   className="form-control" ></input>

                        </div>

                        <div className="form-group">
                            <br></br>
                            <button className="btn btn-success" type="submit"  >Submit</button>
                            <button style={{marginLeft:"10px"}} className="btn btn-danger" type="submit" onClick={handleClick} >Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default withRouter(Edit);