import axios from "axios";

const FREEMENTOR_API_SESSION= "https://freemantar.herokuapp.com/freemantor/v1/session";
const token=localStorage.getItem("freeMentor_token");

const config={
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token':token
    }
}
class SessionApi{

    async createsession(data){

        try {
            const res= await axios.post(FREEMENTOR_API_SESSION+"/request",data,config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }

    async getAllSession(id){

        try {
            const res= await axios.get(FREEMENTOR_API_SESSION+"/"+id+"/all",config);
            return res;
        } catch (error) {
            console.log(error.response);
            return error.response;
        }

    }
   

    
    async deleteOneSession(id){
        try {
            const res = await axios.delete(FREEMENTOR_API_SESSION+"/"+id,config);
            return res;
        } catch (error) {
            return error.response;
        }
    }

}

export default new SessionApi();