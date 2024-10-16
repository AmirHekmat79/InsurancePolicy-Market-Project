 
 let licensesName={
    notifaano:"notifaano",
    notifaano_pwa:"notifaano_pwa",
    novin:"novin",
    novin_pwa:"novin_pwa",
 }
let Config={
    setConfig(license){
        if(license=="notifaano"){
            return {
                title: "نوتیفانو",
                Server: "https://server.notifaano.ir/",
                media: "",
                domain: "notifaano.ir",
                SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
                ApiKey: "375abcdde0dc461e85629483d46dc6f3",
                AppId: "d2bb0566-d575-4374-8330-b7db1f1a7cb0",
                activeOnlinePayment: true,
                license: false,
                directLicense: false,
                className: "Notifaano",
                licenseText: "",
                template: "default",
                isPwa: false,
                captcha: "https://captcha.kn2.ir/",
                cdn: "https://cdn.kn2.ir/",
              };
        }else if(license=="notifaano_pwa"){
            return {
                title: "نوتیفانو",
                Server: "https://server.notifaano.ir/",
                media: "",
                domain: "notifaano.ir",
                SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
                ApiKey: "375abcdde0dc461e85629483d46dc6f3",
                AppId: "d2bb0566-d575-4374-8330-b7db1f1a7cb0",
                activeOnlinePayment: true,
                license: false,
                directLicense: false,
                className: "Notifaano",
                licenseText: "",
                template: "default",
                isPwa: true,
                captcha: "https://captcha.kn2.ir/",
                cdn: "https://cdn.kn2.ir/",
              };
        }else if(license=="novin"){
            return {
                title:'نوین',
                domain:"enovinplus.com",
                Server: 'https://server.enovinplus.com/',
                SiteKey: '6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH',
                ApiKey: '4b1c37bd-0b75-42dd-81fc-41a74d4cf727',
                AppId: "4b1c37bd-0b75-42dd-81fc-41a74d4cf727",
                activeOnlinePayment: true,
                license: false,
                directLicense: false,
                className: "enovinplus",
                InsuranceTypes:"https://media.enovinplus.com/Easybimeh/FileManager.Front/insurancepolicy/assets/images/insurance-types.png" ,
                akaGeneralApiUrl:"https://akageneralapi.enovinplus.com/" ,
                captcha:"https://captcha.kn2.ir/",
                cdn:"https://cdn.kn2.ir/",
                isPwa:false
              };
        }else if(license=="novin_pwa"){
            return {
                title:'نوین',
                domain:"enovinplus.com",
                Server: 'https://server.enovinplus.com/',
                SiteKey: '6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH',
                ApiKey: '4b1c37bd-0b75-42dd-81fc-41a74d4cf727',
                AppId: "4b1c37bd-0b75-42dd-81fc-41a74d4cf727",
                activeOnlinePayment: true,
                license: false,
                directLicense: false,
                className: "enovinplus",
                InsuranceTypes:"https://media.enovinplus.com/Easybimeh/FileManager.Front/insurancepolicy/assets/images/insurance-types.png" ,
                akaGeneralApiUrl:"https://akageneralapi.enovinplus.com/" ,
                captcha:"https://captcha.kn2.ir/",
                cdn:"https://cdn.kn2.ir/",
                isPwa:true
              };
        }
          
    } ,
    getConfig(){
        let config=this.setConfig(licensesName.notifaano);
        return config;
    }
}
export default Config;
