<template>
  <section dir="rtl" class="row justify-around  items-center sub-footer">
    <div class="col-auto">
      <q-btn class="logo-btn q-my-md"
        ><q-img src="../../assets/footerLogo.png" width="140px"></q-img
      ></q-btn>
      <div class="row justify-start items-center q-my-lg q-gutter-md">
        <a class="cursor-pointer">
                  <q-img  width="24px"  src="/src/icons/telegram (2) 1 (1).svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="24px"  src="/src/icons/linkedin (1) 1 (2).svg"/>
              </a>
              <a class="cursor-pointer">
          <q-img width="24px" src="/src/icons/twitter (1) 1 (1).svg"/>
              </a>
        <a class="cursor-pointer">
          <q-img width="24px" src="/src/icons/whatsapp 1 (1).svg"/>
         </a>
        <a class="cursor-pointer"  >
                  <q-img   width="24px" src="/src/icons/instagram (3) 1 (1).svg"/>
              </a>
      </div>
      <div class="row justify-start items-center q-gutter-sm">
        <div class="q-mb-md">
          <q-icon  class="img-inner" name="call" width="24px"></q-icon>
        </div>
        <p class="text-subtitle call-number">021 - 12345678</p>
      </div>
      <div class="row justify-start items-center q-gutter-sm">
        <div class="q-mb-md">
          <q-icon class="img-inner"  name="email" width="24px"></q-icon>
        </div>
        <p class="text-subtitle call-number">Info@easybimeh.com</p>
      </div>
      <div class="row justify-start items-center">
        <div>
          <p class="sub-footer-location-text">
            تهران - خیابان ولیعصر - نبش خیابان توانیر - پلاک ۲۴۹۲ - طبقه ۱ -
            واحد ۱۰۴
          </p>
        </div>
      </div>
    </div>

    <div class="col-auto site-feature-container">
      <h2 class="title">امکانات سایت</h2>
      <ul class="site-features">
        <li class="row  items-center"><a @click="this.$router.push('/AboutUs')"> درباره ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/')"> خدمات ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/ContactUs')"> تماس با ما </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/')"> پیشنهادات ، انتقادات و شکایات </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/')"> پرسش های متداول</a></li>
        <li class="row  items-center"><a @click="this.$router.push('/')">  پیگیری بیمه نامه </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/')">    سامانه بازاریابان </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/')">   همکاری با نمایندگان بیمه  </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/ContactUs')">   همکاری با  ما  </a></li>
        <li class="row  items-center"><a @click="this.$router.push('/')">    قوانین و مقررات   </a></li>
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
      <div id="footer-map" style="height: 200px; width: 340px"></div>
    </div>
  </section>

  <section class="row justify-center items-center text-center shadow-1 top-footer" >
    <div class="col-sm-1 col-xs-3 sign-img-container">
      <q-img
        class="enahad-sign"
        src="../../assets/enahad.png"
        width="62px"
      ></q-img>
    </div>
    <div class="col-sm-1 col-xs-3 sign-img-container">
      <q-img
        class="kargozar-sign"
        src="../../assets/kargozar.png"
        width="62px"
      ></q-img>
    </div>
    <div class="col-sm-1  col-xs-3 sign-img-container">
      <q-img
        class="international-sign"
        src="../../assets/internationalSign.png"
        width="62px"
      ></q-img>
    </div>
  </section>
  <footer class="Footer text-center" >
    {{ baseData.footerContent }}
  </footer>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import services from "src/services/services";
export default {
  name: "FooterSection",
  data() {
    return {
      map: null,
      baseData: [],
    };
  },
  mounted() {
    this.initMap();
    this.baseData=JSON.parse(localStorage.getItem("baseData"));
  },
  methods: {
    initMap() {
      this.map = L.map("footer-map", {
        center: [35.72713135221933, 51.4136544156329],
        zoom: 13,
        scrollWheelZoom: false,
        attributionControl: false
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(this.map);

      L.marker([35.72713135221933, 51.4136544156329]).addTo(this.map);
      
    },
     
  },
};
</script>

<style scoped>
li a {
  text-decoration: none;
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
.top-footer {
  text-align: center;
  padding: 35px;
  background: #eee;
}
.sub-footer {
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
.sub-footer-location-text {
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
  .sub-footer-location-text {
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
