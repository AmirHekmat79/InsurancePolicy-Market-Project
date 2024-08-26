import axios from "axios";
import BaseServices from "./baseServices";
const BASE_URL = 'https://server.easybimeh.com/api';

const apiService = {
    getInsuranceCentreInfo(subDomain){
        return  axios.get(`${BASE_URL}/InsuranceCentre/Info?subDomain=${subDomain}`);
    } ,
    getInsurancePlan(subDomain){
        return  axios.get(`${BASE_URL}/InsurancePolicyPlan/SpecialPlan?subDomain=${subDomain}`);
    },
    getSuggestionFormPlans(subDomain){
        return  axios.get(`${BASE_URL}/InsurancePolicyPlan/SuggestionForm_Plans?subDomain=${subDomain}`);
    },
    getPolicyIntroduction(id){
        return  axios.get(`${BASE_URL}/InsuranceCentre/PortalLandingPage?id=${id}`);
    } ,
    getMenuesItem(){
        return BaseServices.get("/ComboData/InsuranceCentrePortalMenues",{subDomain:"sabz"});
    }
    
}

export default apiService;