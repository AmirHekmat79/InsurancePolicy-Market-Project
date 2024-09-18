import axios from "axios";
import baseServices from "./baseServices";
const BASE_URL = 'https://server.easybimeh.com/api';
const optionServices = {
    getProvince(){
        return baseServices.get("/ComboData/Province",{});
    },
    getCity(provinceId){
        return baseServices.get("/ComboData/City",{provinceId:provinceId});
    },
}

export default optionServices;