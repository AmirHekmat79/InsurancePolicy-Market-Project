import axios from "axios";
import baseServices from "./baseServices";

const services = {

    getInsurancePlans(){
        let domain=baseServices.getDomain();
        return baseServices.get("/InsurancePolicyPlan/SpecialPlan",{subDomain:domain});
    },
    getSuggestionForms(){
        let domain=baseServices.getDomain();
        return baseServices.get("/InsurancePolicyPlan/SuggestionForm_Plans",{subDomain:domain});
    },
    getPortalLandingPage(){
        let domain=baseServices.getDomain();
        return baseServices.get("/InsuranceCentre/PortalLandingPage",{id:domain});
    } ,
    getInsurancePolicies(){
        let domain=baseServices.getDomain();
        return baseServices.get("/ComboData/InsuranceCentrePolicyTypes",{landingCall:true,subDomain:domain});
    } ,
    getMenuesItem(){
        return baseServices.get("/ComboData/InsuranceCentrePortalMenues",{subDomain:"sabz"});
    },
    sendSms(nationalCode,mobile){
        let domain=baseServices.getDomain();
        return baseServices.get("/Account/SendSmsToken",{mobile:mobile,insuranceCentreSubDomain:domain});
    },
    getMessageWithoutAuthorization(nationalCode,mobile,token,aliasName,resource,insuranceCentreSubDomain,onlyOtp){
        return baseServices.get("/Account/verifySmsToken",{nationalCode,mobile,token,aliasName,resource,insuranceCentreSubDomain,onlyOtp});
    },
    verifySms(nationalCode,mobile,token,aliasName){
        let domain=baseServices.getDomain();
        return baseServices.get("/Account/verifySmsToken",{nationalCode,mobile,token,aliasName,insuranceCentreSubDomain:domain});
    },
    verifySmsWithOnlyOtp(nationalCode,mobile,token,aliasName,onlyOtp){
        let domain=baseServices.getDomain();
        return baseServices.get("/Account/verifySmsToken",{nationalCode,mobile,token,aliasName,onlyOtp,insuranceCentreSubDomain:domain});
    },
    getFaq(){
        let domain=baseServices.getDomain();
        return baseServices.get(`/Faq/InsuranceCentre/${domain}`,{});
    },
    getWeblog(){
        let domain=baseServices.getDomain();
        return baseServices.get(`/Article/Weblog/${domain}`,{});
    },
    getArticle(id){
        let domain=baseServices.getDomain();
        return baseServices.get(`/Article/Detail/${id}`,{});
    },
    fastRegister(data){
        let domain=baseServices.getDomain();
        data.insuranceCentreDomain=domain;
        return baseServices.post("/Account/FastRegister",data);
    },
    insertRequestDemo(data){
        let domain=baseServices.getDomain();
        data.subDomainName=domain;
        return baseServices.post("/RequestDemo/InsertRequestDemo",data);
    },
    logout(headers){
        let data={};
        return baseServices.post("/Account/logout",data,headers);
    },
    getCaptchCode(){
        var captchaUrl = "https://captcha.kn2.ir";
        return baseServices.getCaptch(`${captchaUrl}/captcha/get?rand=${Math.random()}`,{});
    },
    trackingRequest(trackingCode,nationalCode){
      let domain=baseServices.getDomain();
      return baseServices.get(`/InsurancePolicy/Tracking`,{trackingCode,nationalCode});
  },
}

export default services;
