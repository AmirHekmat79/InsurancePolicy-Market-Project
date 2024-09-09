import axios from 'axios';
const baseURL = "https://server.notifaano.ir/api";
 let BaseServices={
   async get(endpoint,params,headers){
        let response= await axios.get(baseURL + endpoint, {
            params: params,
            headers: headers
           });
           return response;
    },
   async post(endpoint,data,headers){
    let response=await axios.post(baseURL + endpoint, data, {
        headers: headers,
    })
    return response;
    },
    getDomain() {
      return "sabz"
    //   var domain = window.location.host.split(".")[0];
    //   if (domain == "www") {
    //     domain = window.location.host.split(".")[1];
    //   }
    //   return domain;
    }
}
export default BaseServices;