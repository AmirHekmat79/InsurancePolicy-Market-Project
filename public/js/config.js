 
 let licensesName={
    notifaano:"notifaano",
    notifaano_pwa:"notifaano_pwa",
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
        }
          
    } ,
    getConfig(){
        let config=this.setConfig(licensesName.notifaano);
        return config;
    }
}
export default Config;
