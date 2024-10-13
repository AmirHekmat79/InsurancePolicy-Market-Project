<template>
  <section dir="rtl" class="row top-footer">
    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 contact-us">
      <q-btn class="logo-btn q-my-md"
        ><q-img src="/images/footerLogo.png" width="140px"></q-img
      ></q-btn>
      <div class="row justify-start items-center q-my-lg q-gutter-md social-ntworks">
        <a @click="openNewPage(item.url)" v-for="(item,index) in socialNetworks" :key="index" class="cursor-pointer"  >
            <q-img   width="24px" :src="item.iconUrl"/>
        </a>
      </div>
      <a v-if="baseData && baseData.insuranceCentre" :href="'tel:'+baseData.insuranceCentre.phone" class="row call-number justify-start items-center q-mt-sm cursor-pointer">
        <q-icon  class=" q-ml-xs" name="call" width="24px"></q-icon>
        <p  class="text-subtitle ">{{ baseData.insuranceCentre.phone }}</p>
      </a>
      <a v-if="baseData && baseData.insuranceCentre" :href="'mailto:'+baseData.insuranceCentre.email" class="row email justify-start items-center q-mt-sm cursor-pointer">
        <q-icon class=" q-ml-xs"  name="email" width="24px"></q-icon>
        <p  class="text-subtitle ">{{ baseData.insuranceCentre.email }}</p>
      </a>
      <div class="row justify-start items-center  q-mt-sm">
        <div>
          <p v-if="baseData && baseData.insuranceCentre" class="top-footer-location-text">
            {{ baseData.insuranceCentre.address }}
          </p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 site-feature-container">
      <h2 class="title">امکانات سایت</h2>
      <div class="flex">
        <ul class="site-features">
        <li class="row  items-center"><a @click="this.$router.push('/about')"> درباره ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/ourservice')"> خدمات ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/contactUs')"> تماس با ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/registerComplaint')"> پیشنهادات ، انتقادات و شکایات </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/faq')"> پرسش های متداول</a></li>
      </ul>
      <ul class="site-features section-2">
        <li class="row  items-center"><a @click="this.$router.push('/trackingInsurance')">  پیگیری بیمه نامه </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/marketerRegistration')">    سامانه بازاریابان </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/agentRegisteration')">   همکاری با نمایندگان بیمه  </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/otherJobsRegisteration')">   همکاری با  ما  </a></li>
        <li class="row  items-center"><a @click="this.roles=true;">    قوانین و مقررات   </a></li>
      </ul>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 map-container ">
      <!-- <div id="footer-map" style="height: 200px; width: 340px"></div> -->
       <div class="map-view" style="height: 200px;" id="mapview"></div>
    </div>

  </section>

  <section class="row justify-center items-center text-center shadow-1 middle-footer" >
    <div
        class="dynamic-certificate-item"
        v-if="baseData.insuranceCentrePortal && baseData.insuranceCentrePortal.eTrustSymbol"
      >
        <div
            id="eNamad"
          v-html="baseData.insuranceCentrePortal.eTrustSymbol"
        ></div>

      </div>
    <div  v-if="baseData && baseData.insuranceCentre && baseData.insuranceCentre.metaMediaActivityLicenceUrl" class="sign-img-container cursor-pointer">
      <q-img
        @click="openNewPage(baseData.insuranceCentre.metaMediaActivityLicenceUrl)"
        class="kargozar-sign"
        src="/images/kargozar.png"
        width="120px"
      ></q-img>
    </div>
     <div
     class="dynamic-certificate-item"
     v-if="baseData.insuranceCentrePortal && baseData.insuranceCentrePortal.digitalMediaOrganizerSymbol"
   >
     <div
       id="samandehi"
       v-html="baseData.insuranceCentrePortal.digitalMediaOrganizerSymbol"
     ></div>

   </div>
   <q-dialog v-model="roles">
      <q-card
        style="width: 700px; max-width: 80vw; direction: rtl"
      >
        <q-card-section>
          <h5 style="margin:10px 0px">قوانین و مقررات</h5>
        </q-card-section>
        <div
          v-html="baseData.insuranceCentrePortal.termsConditions"
          style="padding: 29px"
        ></div>
      </q-card>
    </q-dialog>
  </section>
  <footer v-if="baseData && baseData.footerContent" class="bottom-footer text-center" >
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
      roles:false
    };
  },
  mounted() {

    this.baseData=this.data;
    if (this.baseData.insuranceCentrePortal.bale) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/bale.svg",
        url: this.baseData.insuranceCentrePortal.bale,
      });
    }
    if (this.baseData.insuranceCentrePortal.eitaa) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/eitaa.svg",
        url: this.baseData.insuranceCentrePortal.eitaa,
      });
    }
    if (this.baseData.insuranceCentrePortal.faceBook) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/facebook.svg",
        url: this.baseData.insuranceCentrePortal.faceBook,
      });
    }
    if (this.baseData.insuranceCentrePortal.igap) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/igap.svg",
        url: this.baseData.insuranceCentrePortal.igap,
      });
    }
    if (this.baseData.insuranceCentrePortal.instagram) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/instagram.svg",
        url: this.baseData.insuranceCentrePortal.instagram,
      });
    }
    if (this.baseData.insuranceCentrePortal.linkedin) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/linkedin.svg",
        url: this.baseData.insuranceCentrePortal.linkedin,
      });
    }
    if (this.baseData.insuranceCentrePortal.robika) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/robika.svg",
        url: this.baseData.insuranceCentrePortal.robika,
      });
    }
    if (this.baseData.insuranceCentrePortal.soroush) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/soroush.svg",
        url: this.baseData.insuranceCentrePortal.soroush,
      });
    }
    if (this.baseData.insuranceCentrePortal.telegram) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/telegram.svg",
        url: this.baseData.insuranceCentrePortal.telegram,
      });
    }
    if (this.baseData.insuranceCentrePortal.twitter) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/twitter-x.svg",
        url: this.baseData.insuranceCentrePortal.twitter,
      });
    }
    if (this.baseData.insuranceCentrePortal.whatsapp) {
      this.socialNetworks.push({
        iconUrl: "/icons/social-networks/whatsapp.svg",
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
      <link href="/css/leaflet.css" rel="stylesheet">
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
.top-footer{
  padding: 30px 30px;
  margin: auto;
  background: var(--q-themeColor);
  .call-number,.email{
    color: #fff;
    &:hover{
        color:#ddd;
        .q-icon{
          color:#ddd;
        }
    }
  }
  .top-footer-location-text {
    white-space: wrap;
    line-height: 30px;
    width: 300px;
    height: 112px;
    margin-top: 10px;
    color: #fff;
    font-weight: bolder;
  }
  .title{
    color: #fff;
    font-size:22px;
  }
  @media(max-width:768px){
    padding:15px;
  }
  .contact-us{
    padding:10px;
    .q-icon{
      color:#fff;
      font-size: 18px;
    }
    @media(max-width:768px){
    padding:0px;
   }
  }
  .site-feature-container{
    padding:10px;
    
  }
  .social-ntworks{
    a{
      margin: 2px !important;
    }
  }
  a{
    text-decoration: none;
  }
    
  .site-feature-container{
    ul{
      padding:0px 10px;
      margin:0px;
      li{
      list-style: none;
      margin-top:15px;
      color:#fff;
      cursor: pointer;
      &:hover{
        color:#ddd;
      }
    }
    }
  }
  .map-container{
    padding-top:50px;
    .map-view{
    width:340px;
    @media(max-width:760px){
      width:280px
    }
  }
  }
  
}
.middle-footer {
  text-align: center;
  padding: 35px;
  background: var(--q-themeColor);
  opacity: 0.95;
  .dynamic-certificate-item{
    img{
      width: 100px;
    }
  }
  .site-features.section-2 {
    margin-right: 20px;
    @media(max-width:650px){
     margin-right: 0px;
     margin:0px;
   }
  }
 }
 .bottom-footer{
   padding: 10px;
 }
</style>
