<template>
  <section dir="rtl" class="row footer-section justify-around  items-center top-footer">
    <div class="col-auto">
      <q-btn class="logo-btn q-my-md"
        ><q-img src="images/footerLogo.png" width="140px"></q-img
      ></q-btn>
      <div class="row justify-start items-center q-my-lg q-gutter-md social-ntworks">
        <a @click="openNewPage(item.url)" v-for="(item,index) in socialNetworks" :key="index" class="cursor-pointer"  >
            <q-img   width="24px" :src="item.iconUrl"/>
        </a>
      </div>
      <a v-if="baseData && baseData.insuranceCentre" :href="'tel:'+baseData.insuranceCentre.phone" class="row justify-start items-center q-mt-sm cursor-pointer">
        <q-icon  class="img-inner q-ml-xs" name="call" width="24px"></q-icon>
        <p  class="text-subtitle call-number">{{ baseData.insuranceCentre.phone }}</p>
      </a>
      <a v-if="baseData && baseData.insuranceCentre" :href="'mailto:'+baseData.insuranceCentre.email" class="row justify-start items-center q-mt-sm cursor-pointer">
        <q-icon class="img-inner q-ml-xs"  name="email" width="24px"></q-icon>
        <p  class="text-subtitle call-number">{{ baseData.insuranceCentre.email }}</p>
      </a>
      <div class="row justify-start items-center  q-mt-sm">
        <div>
          <p v-if="baseData && baseData.insuranceCentre" class="top-footer-location-text">
            {{ baseData.insuranceCentre.address }}
          </p>
        </div>
      </div>
    </div>

    <div class="col-auto site-feature-container">
      <h2 class="title">امکانات سایت</h2>
      <ul class="site-features">
        <li class="row  items-center"><a @click="this.$router.push('/AboutUs')"> درباره ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/ourService')"> خدمات ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/ContactUs')"> تماس با ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/registerComplaint')"> پیشنهادات ، انتقادات و شکایات </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/commonFaq')"> پرسش های متداول</a></li>
        <li class="row  items-center"><a @click="this.$router.push('/trackingInsurance')">  پیگیری بیمه نامه </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/marketerRegistration')">    سامانه بازاریابان </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/agentRegisteration')">   همکاری با نمایندگان بیمه  </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/otherJobsRegisteration')">   همکاری با  ما  </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/rulesAndObligations')">    قوانین و مقررات   </a></li>
      </ul>
    </div>
    <!-- <div class="col-auto common-link-container">
      <h2 class="title">لینک های پر کاربرد</h2>
      <ul class="contactus">
        <li class="row   q-my-sm">آدرس بیمه مرکزی</li>

        <li class="row  q-my-sm">آدرس سنهاب</li>

        <li class="row   q-my-sm">پیگیری درخواست</li>
        <li class="row   q-my-sm">دانلود نسخه موبایل</li>
        <li class="row   q-my-sm">قوانین و مقررات</li>
      </ul>
    </div> -->
    <div class="col-auto">
      <!-- <div id="footer-map" style="height: 200px; width: 340px"></div> -->
       <div style="height: 200px; width: 340px" id="mapview"></div>
    </div>
    
  </section>

  <section class="row justify-center items-center text-center shadow-1 middle-footer" >
    <div
        class="dynamic-certificate-item"
        v-if="baseData.insuranceCentrePortal && baseData.insuranceCentrePortal.eTrustSymbol"
      >
        <div
          class="enamad" id="eNamad"
          v-html="baseData.insuranceCentrePortal.eTrustSymbol"
        ></div>

      </div>
    <div  v-if="baseData && baseData.insuranceCentre && baseData.insuranceCentre.metaMediaActivityLicenceUrl" class="sign-img-container cursor-pointer">
      <q-img
        @click="openNewPage(baseData.insuranceCentre.metaMediaActivityLicenceUrl)"
        class="kargozar-sign"
        src="images/kargozar.png"
        width="120px"
      ></q-img>
    </div>
     <div
     class="dynamic-certificate-item"
     v-if="baseData.insuranceCentrePortal && baseData.insuranceCentrePortal.digitalMediaOrganizerSymbol"
   >
     <div
       class="enamad" id="samandehi"
       v-html="baseData.insuranceCentrePortal.digitalMediaOrganizerSymbol"
     ></div>
     
   </div>
  </section>
  <footer v-if="baseData && baseData.footerContent" class="Footer text-center" >
    {{ baseData.footerContent }}
  </footer>
</template>

<script>
//import services from "src/services/services";
export default {
  name: "FooterSection",
  props: {
    data:{}
  },
  data() {
    return {
      baseData: [],
      socialNetworks: [],
    };
  },
  mounted() {
    
    this.baseData=this.data;
    if (this.baseData.insuranceCentrePortal.bale) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/bale.svg",
        url: this.baseData.insuranceCentrePortal.bale,
      });
    }
    if (this.baseData.insuranceCentrePortal.eitaa) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/eitaa.svg",
        url: this.baseData.insuranceCentrePortal.eitaa,
      });
    }
    if (this.baseData.insuranceCentrePortal.faceBook) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/facebook.svg",
        url: this.baseData.insuranceCentrePortal.faceBook,
      });
    }
    if (this.baseData.insuranceCentrePortal.igap) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/igap.svg",
        url: this.baseData.insuranceCentrePortal.igap,
      });
    }
    if (this.baseData.insuranceCentrePortal.instagram) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/instagram.svg",
        url: this.baseData.insuranceCentrePortal.instagram,
      });
    }
    if (this.baseData.insuranceCentrePortal.linkedin) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/linkedin.svg",
        url: this.baseData.insuranceCentrePortal.linkedin,
      });
    }
    if (this.baseData.insuranceCentrePortal.robika) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/robika.svg",
        url: this.baseData.insuranceCentrePortal.robika,
      });
    }
    if (this.baseData.insuranceCentrePortal.soroush) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/soroush.svg",
        url: this.baseData.insuranceCentrePortal.soroush,
      });
    }
    if (this.baseData.insuranceCentrePortal.telegram) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/telegram.svg",
        url: this.baseData.insuranceCentrePortal.telegram,
      });
    }
    if (this.baseData.insuranceCentrePortal.twitter) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/twitter-x.svg",
        url: this.baseData.insuranceCentrePortal.twitter,
      });
    }
    if (this.baseData.insuranceCentrePortal.whatsapp) {
      this.socialNetworks.push({
        iconUrl: "icons/social-networks/whatsapp.svg",
        url: this.baseData.insuranceCentrePortal.whatsapp,
      });
    }
    setTimeout(()=>{
     this.setCertificatesStaticImage();
     this.initMap();
    },1000)
    
  },
  methods: {
    initMap() {
      var element = document.getElementById("mapview");
    if (element) {
      element.innerHTML = `
      <link href="css/leaflet.css" rel="stylesheet">
        <div id="map" class="map map-home leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" style="width: 100%; height: 200px; border: 1px solid rgb(239, 239, 239) !important; position: relative; outline: none;" tabindex="0"><div style="text-align: center;height: 350px;" "="">
        <img  style="width: 20%; margin: auto;"> </div><table style="height: 100%; margin: auto;"> <tbody><tr>  </tr> </tbody></table><div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 3px, 0px);"><div class="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 1; opacity: 1;"><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1);">

        </div><div class="leaflet-pane leaflet-overlay-pane"></div><div class="leaflet-pane leaflet-marker-pane">

        </div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"><div class="leaflet-popup  leaflet-zoom-animated" style="opacity: 1; transform: translate3d(262px, 139px, 0px); bottom: -7px; left: -171px;"><div class="leaflet-popup-content-wrapper">

        </div><div class="leaflet-popup-tip-container"><div class="leaflet-popup-tip"></div></div><a class="leaflet-popup-close-button" href="#close">×</a></div></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(1.09212e+07px, 6.81831e+06px, 0px) scale(32768);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out">−</a></div></div><div class="leaflet-top leaflet-right"></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"><a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a></div></div></div></div>

        `;
    }
    window.sessionStorage.setItem(
      "globalLat",
      JSON.stringify(this.baseData.insuranceCentre.latitude)
    );
    window.sessionStorage.setItem(
      "globalLng",
      JSON.stringify(this.baseData.insuranceCentre.longitude)
    );
    let leafletScript = document.createElement("script");
    leafletScript.setAttribute("src", "/js/leaflet.js");
    document.head.appendChild(leafletScript);
    },
    openNewPage(url)
    {
      window.open(url)
    },
    setCertificatesStaticImage(){
    var eNamadImg=document.querySelector("#eNamad img");
    eNamadImg.src="https://media.easybimeh.com//Easybimeh/FileManager/EasyBimeh/enamad.png";
    var samandehiImg=document.querySelector("#samandehi img");
    samandehiImg.src="https://media.easybimeh.com//Easybimeh/FileManager/EasyBimeh/samandehi.png";
  }
     
  },
};
</script>

<style lang="scss">
.footer-section{
  .social-ntworks{
    a{
      margin: 2px !important;
    }
  }
  a{
    text-decoration: none;
  }
   
}
 
.img-inner{
  color: var(--q-Blue);
}
.title {
  font-size: 20px;
  font-weight: 500;
}
.Footer {
  padding: 11px;
  background: var(--q-Blue);
  color: #fff !important;
  
}
.middle-footer {
  text-align: center;
  padding: 35px;
  background: #eee;
  .dynamic-certificate-item{
  
    img{
      width: 100px;
    }
  }
}
.top-footer {
  padding: 30px 30px;
  margin: auto;
  /* text-align: center; */
  background: #eee;
}
#footer-map {
  width: 100%;
  height: 100%;
}
.site-features,
.contactus {
  list-style-type: none;
  font: 14px "iransans";
  padding: 0px;
}
.site-features li {
  margin-top: 16px;
  cursor: pointer;
}
.site-features li:hover {
  color: #007bff;
}
.contactus li {
  margin-top: 16px;
  cursor: pointer;
}
.contactus li:hover {
  color: #007bff;
}

li::marker {
  color: #003975 !important;
}
/* .common-link-container,
.site-feature-container {
  width: 288px;
  height: 342px;
  direction: rtl;
} */

.logo-btn {
  background: #003975;
  border-radius: 20px;
}
.top-footer-location-text {
  white-space: wrap;
  line-height: 30px;
  width: 300px;
  height: 112px;
  margin-top: 10px;
  color: #003975;
  font-weight: bolder;
}
.call-number {
  color: #003975;
}

@media screen and (max-width : 700px){
  .top-footer-location-text {
  white-space: wrap;
  line-height: 30px;
  width: 200px;
  height: 112px;
  margin-top: 10px;
  color: #003975;
  font-weight: bolder;
  font-size: 13px;
}

.title {
  font-size: 16px;
  font-weight: bolder;
}
.site-feature-container{
  width : 55% !important;
  margin : 10px auto;
}
}
</style>
