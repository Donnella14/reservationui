import axios from "axios";

// const CIVIL_API_SESSION= "https://civilmarriage-api.herokuapp.com/civil/v1/sector";
const CIVIL_API_SCHEDULER="http://localhost:4041/civil/v1/scheduler";
const token=localStorage.getItem("civil_token");

const config={
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token':token
    }
}
class SchedulerApi{

    async createscheduler(data){

        try {
            const res= await axios.post(CIVIL_API_SCHEDULER+"/create",data,config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }

    async getAllSchedulers(){

        try {
            const res= await axios.get(CIVIL_API_SCHEDULER+"/all",config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }
    async acceptscheduler(id){
        try {
            const res = await axios.patch(CIVIL_API_SCHEDULER+"/"+id+"/BOOKED",config);
            return res;
        } catch (error) {
            return error.response;
        }
    }
    async getAllSchedulerUser(id) {
        try {
            const res = await axios.get(CIVIL_API_SCHEDULER + "/all/"+id, config)
            return res;
        } catch (error) {

            return error.response;


        }

    }
}

export default new SchedulerApi();