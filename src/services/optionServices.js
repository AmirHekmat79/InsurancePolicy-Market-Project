import axios from "axios";
import baseServices from "./baseServices";
const BASE_URL = 'https://server.easybimeh.com/api';
const optionServices = {
    getProvince(){
        return baseServices.get("/ComboData/Province",{});
    },
    getInsuranceTypeDamageForm(){
        return baseServices.get("/ComboData/InsuranceTypeDamageForm",{});
    },
    getInsuranceCompanies(insuranceTypeId){
        let domain=baseServices.getDomain();
        return baseServices.get("/ComboData/InsuranceCompanies",{subDomain: domain,insuranceTypeId:insuranceTypeId});
    },
    getInsuranceTypeDamageForm(){
      return baseServices.get("/ComboData/Province",{});
    },
    getCityByProvinceId(provinceId) {
      return baseServices.get("/ComboData/City",{provinceId});
    },
    getLastEducationalCertificate() {
      return baseServices.get("/ComboData/Education",{});
    },
    getWorkExperience() {
      return baseServices.get("/ComboData/WorkExperience",{});
    },
    getGenderTypes() {
      return baseServices.get("/ComboData/GenderTypes",{});
    },
    suggestionsCritic() {
      return baseServices.get("/SuggestionsCritic/0",{});
    }
}

export default optionServices;
