import axios from "axios";
const Patient_Api_Base_Url = "http://localhost:8082/patient/admin/getPatient";
const Delete_Patient_Api_Base_Url = "http://localhost:8082/patient/admin/deletePatient?";
const Get_Patient_Api_Base_Url = "http://localhost:8082/patient/admin/getPatientById?";
const Update_Patient_Api_Base_Url = "http://localhost:8082/patient/admin/updatePatient?id=";
class PatientService {
    getPatient(){
        return axios.get(Patient_Api_Base_Url);
    }

    deletePatient(id){
        return axios.delete(Delete_Patient_Api_Base_Url +"id="+ id)
    }


    getPatientById(id){
        return axios.get(Get_Patient_Api_Base_Url +"id=" +id)
    }

    updatePatient(employee, employeeId){
        return axios.put( Update_Patient_Api_Base_Url + employeeId, employee);
    }


}
export default new PatientService();