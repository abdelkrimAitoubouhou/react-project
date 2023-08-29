import React, {Component} from 'react';
import {withRouter} from "./WithRouter";
import PatientService from "../services/PatientService";
import {useParams} from "react-router-dom";

class EditingPatient extends Component {


    constructor(props) {
        super(props);

        this.state = {
            patient :[],
            username :'',
            status :'',
            email :'',
            password :'',
            confirmPassword :''

        }

        this.handleClick=this.handleClick.bind(this);
        this.updatePatient=this.updatePatient.bind(this);
        this.setUsername=this.setUsername.bind(this);
        this.setConfirmPassword=this.setConfirmPassword.bind(this);
        this.setEmail=this.setEmail.bind(this);
        this.setPassword=this.setPassword.bind(this);
        this.setStatus=this.setStatus.bind(this);
    }

    setUsername = (event) =>{
        this.setState({username: event.target.value});
    }

    setEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    setStatus = (event) =>{
        this.setState({status: event.target.value});
    }
    setPassword = (event) =>{
        this.setState({password: event.target.value});
    }
    setConfirmPassword = (event) =>{
        this.setState({confirmPassword: event.target.value});
    }


    componentDidMount() {
        PatientService.getPatientById({this.patId}).then((res)=>{
         let patient = res.data;
         this.setState({
             username: patient.username,
             email: patient.email,
             password: patient.password,
             confirmPassword: patient.confirmPassword,
             status: patient.status
         });
        });
    }



   handleClick() {
        this.props.navigate('/patient-list')
    }

updatePatient=(e)=>{
        e.preventDefault();
        let patient = {
            username: this.state.username, email: this.state.email, password: this.state.password, status: this.state.status,
        };
        console.log('patient => ' + JSON.stringify(patient));
    }



    render() {
        const { Patid } = this.props.match.params;

        return (
            <div>

                <br/>
                <div className="patientForm" >
                    <form className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div>
                                    <h3 className="patientFormHeader"> Patient Form  </h3>
                                </div>
                                <br/>

                                <div className="form-group">
                                    <label>Username</label>
                                    <input className="form-control" value={this.state.username} onChange={this.setUsername.bind(this)}
                                           required/>
                                </div>

                                <br/>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" value={this.state.email} onChange={this.setEmail.bind(this)}
                                            required/>
                                </div>

                                <br/>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="form-control" value={this.state.password} onChange={this.setPassword.bind(this)}
                                            required/>
                                </div>

                                <br/>
                                <div className="form-group">
                                    <label>Confirm your password</label>
                                    <input className="form-control" value={this.state.confirmPassword} onChange={this.setConfirmPassword.bind(this)}
                                           required/>
                                </div>

                                <br/>

                                <div className="form-group">
                                    <label>Status</label>
                                    <input value={this.state.status} onChange={this.setStatus.bind(this)}
                                           className="form-control" required/>

                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success"  type="submit"
                                    onClick={this.updatePatient}>edit</button>
                                    <button style={{marginLeft:"10px"}}
                                            className="btn btn-danger"  type="submit"
                                    onClick={this.handleClick}>cancel</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default WithMyHook(EditingPatient);