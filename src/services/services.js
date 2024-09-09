import axios from "axios";
import BaseServices from "./baseServices";
const BASE_URL = 'https://server.easybimeh.com/api';

const services = {
    getInsuranceCentreInfo(subDomain){
        return  axios.get(`${BASE_URL}/InsuranceCentre/Info?subDomain=${subDomain}`);
    } ,
    getInsurancePlans(){
        let domain=BaseServices.getDomain();
        return  axios.get(`${BASE_URL}/InsurancePolicyPlan/SpecialPlan?subDomain=${domain}`);
    },
    getSuggestionForms(){
        let domain=BaseServices.getDomain();
        return  axios.get(`${BASE_URL}/InsurancePolicyPlan/SuggestionForm_Plans?subDomain=${domain}`);
    },
    getPortalLandingPage(){
        let domain=BaseServices.getDomain();
        return  axios.get(`${BASE_URL}/InsuranceCentre/PortalLandingPage?id=${domain}`);
    } ,
    getInsurancePolicies(){
        let domain=BaseServices.getDomain();
        return  axios.get(`${BASE_URL}/ComboData/InsuranceCentrePolicyTypes?landingCall=true&subDomain=${domain}`);
    } ,
    getMenuesItem(){
        return BaseServices.get("/ComboData/InsuranceCentrePortalMenues",{subDomain:"sabz"});
    },
    sendSms(nationalCode,mobile){
        let domain=BaseServices.getDomain();
        return BaseServices.get("/Account/SendSmsToken",{mobile:mobile,insuranceCentreSubDomain:domain});
    },
    getMessageWithoutAuthorization(nationalCode,mobile,token,aliasName,resource,insuranceCentreSubDomain,onlyOtp){
        return BaseServices.get("/Account/verifySmsToken",{nationalCode,mobile,token,aliasName,resource,insuranceCentreSubDomain,onlyOtp});
    },
    verifySms(nationalCode,mobile,token,aliasName){
        let domain=BaseServices.getDomain();
        return BaseServices.get("/Account/verifySmsToken",{nationalCode,mobile,token,aliasName,insuranceCentreSubDomain:domain});
    },
    verifySmsWithOnlyOtp(nationalCode,mobile,token,aliasName,onlyOtp){
        let domain=BaseServices.getDomain();
        return BaseServices.get("/Account/verifySmsToken",{nationalCode,mobile,token,aliasName,onlyOtp,insuranceCentreSubDomain:domain});
    },
    fastRegister(data){
        let domain=BaseServices.getDomain();
        data.insuranceCentreDomain=domain;
        return BaseServices.post("/Account/FastRegister",data);
    },
    insertRequestDemo(data){
        let domain=BaseServices.getDomain();
        data.subDomainName=domain;
        return BaseServices.post("/RequestDemo/InsertRequestDemo",data);
    },
    logout(headers){
        let data={};
        return BaseServices.post("/Account/logout",data,headers);
    },
    getCaptchCode(){
        var captchaUrl = "https://captcha.kn2.ir";
        return BaseServices.getCaptch(`${captchaUrl}/captcha/get?rand=${Math.random()}`,{});
    },
}

export default services;