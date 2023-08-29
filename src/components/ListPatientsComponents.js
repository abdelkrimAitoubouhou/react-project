import React, {Component} from 'react';
import {withRouter} from "./WithRouter";
import PatientService from "../services/PatientService";
import axios from "axios";

class ListPatientsComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patient : []

        }

        this.addPatient=this.addPatient.bind(this);
        this.deletePatient=this.deletePatient.bind(this);
        this.handleDeleteClick=this.handleDeleteClick.bind(this);


    }
    componentDidMount() {
        PatientService.getPatient().then((res) => {
            this.setState({patient: res.data})
        });
    }

    addPatient()
    {
        this.props.navigate('/add-patient')
    }


    editPatient(id)
    {
        this.props.navigate('/edit-patient/'+id)
    }


    deletePatient(id){
        if (window.confirm("are you sure you want to delete?"))
        PatientService.deletePatient(id).then(res =>{
            this.setState({patient : this.state.patient.filter(pat => pat.id!== id)});
        })

    }

    handleDeleteClick = (id) => {
        if (window.confirm("are you sure you want to delete?")){
            axios.get('http://localhost:8082/patient/admin/deletePatient/'+id).
            then(res => {
                console.log(res.data);
            })
        }
    };



    render() {

        return (
            <div>
                <h3 id="header">Patient List</h3>

                <table className="table table-bordered">

                    <thead>
                    <tr>
                        <th className="action">Patient name</th>
                        <th className="action">Email</th>
                        <th className="action">Status</th>
                        <th className="action">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.patient.map(
                            patient =>
                            <tr key={patient.id}>
                                <td> {patient.username} </td>
                                <td> {patient.email} </td>
                                <td> {patient.status} </td>
                                <td>
                                    &ensp;
                                    &ensp;
                                    <button style={{marginLeft: "10px"}} className="btn btn-info"
                                            onClick={()=> this.editPatient(patient.id)}> Edit </button>

                                    <button style={{marginLeft: "10px"}} className="btn btn-danger"
                                        onClick={()=>this.deletePatient(patient.id)}> DELETE </button>

                                    <button style={{marginLeft: "10px"}} className="btn btn-primary"> Info </button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(ListPatientsComponents);
