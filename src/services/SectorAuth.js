import axios from "axios";

// const CIVIL_API_SESSION= "https://civilmarriage-api.herokuapp.com/civil/v1/sector";
const CIVIL_API_SESSION="http://localhost:4041/civil/v1/sector";
const token=localStorage.getItem("civil_token");

const config={
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token':token
    }
}
class SectorApi{

    async createsector(data){

        try {
            const res= await axios.post(CIVIL_API_SESSION+"/create",data,config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }

    async getAllSectors(){

        try {
            const res= await axios.get(CIVIL_API_SESSION+"/all",config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }
    async getAllSectorUser(id) {
        try {
            const res = await axios.get(CIVIL_API_SESSION + "/all/" + id, config)
            return res;
        } catch (error) {

            return error.response;


        }

    }

}

export default new SectorApi();