import axios from "axios";

// const CIVIL_API_SESSION= "https://civilmarriage-api.herokuapp.com/civil/v1/sector";
const CIVIL_API_APPOINTMENT="http://localhost:4041/civil/v1/appointment";
const token=localStorage.getItem("civil_token");

const config={
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token':token
    }
}
class AppointmentApi{

    async createappointment(data){

        try {
            const res= await axios.post(CIVIL_API_APPOINTMENT+"/create",data,config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }

    async getAllAppontments(){

        try {
            const res= await axios.get(CIVIL_API_APPOINTMENT+"/all",config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }
   

}

export default new AppointmentApi();