import axios from 'axios';
const baseURL = "https://server.notifaano.ir/api";
 let BaseServices={
   async get(endpoint,params,headers){
        try{
        let response= await axios.get(baseURL + endpoint, {
            params: params,
            headers: headers
           });
           return response;
        }catch(error){
           console.log("this is error",error);
        }
    },
   async post(endpoint,data,headers){
        try{
            let response=await axios.post(baseURL + endpoint, data, {
                headers: headers,
            })
            return response;
        }catch(error){
           console.log("this is error",error);
        }
    },
     
}
export default BaseServices;