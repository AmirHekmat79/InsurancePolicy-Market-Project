<!-- <template>
  <div class="row contact-us-container" v-if="baseData && baseData.insuranceCentrePortal">
    <h3 class="col-12 title">تماس با ما</h3>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-container">
      <q-form @submit="saveMessage">
        <div class="row">

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 input-container">
            <q-input
              dir="rtl"
              class="contact-us-input label-right"
              :rules="[
                (val) => (val !== null && val !== '') || 'نام و نام خانوادگی الزامی است',
              ]"
              color="teal"
              outlined
              v-model="model['aliasName']"
              label="نام و نام خانوادگی"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 input-container">
            <q-input

              class="contact-us-input label-right"
               @keypress="controlLength($event,11)"
              :rules="[
                        val =>
                        (val !== null && val !== '') && val.length == 11 ||
                        'تلفن همراه الزامی است و شامل 11 رقم باشد'
                     ]"
              color="teal"
              outlined
              v-model="model['mobile']"
              type="number"
              label="تلفن همراه"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 input-container">
            <q-input
              class="contact-us-input label-right"
              color="teal"
              outlined
              v-model="model['email']"
              label="ایمیل"
            >
            </q-input>
          </div>
          <div class="col-12 input-container">
            <q-input
              class="contact-us-input textarea-input label-right"
              dir="rtl"
              v-model="model['body']"
              label="متن پیام شما"
              type="textarea"
            />
          </div>
          <div class="col-12 button-container flex justify-end">
            <q-btn  class="form-button" type="submit">
                <q-spinner v-if="isLoading" color="#fff" size="1em"/>
              ارسال
            </q-btn>
          </div>
        </div>
      </q-form>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 information-container" >
      <div class="row item-container">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 item-title">
          <q-icon name="call" style="font-size:20px" />
          <span class="text">شماره تلفن : </span>
        </div>
        <span class="col-lg-9 col-md-8 col-sm-8 col-xs-6 item-value">
          {{ baseData.insuranceCentre.phone }}
        </span>
      </div>
      <div class="row item-container">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 item-title">
          <q-icon name="location_on" style="font-size:20px" />
          <span class="text">آدرس : </span>
        </div>
        <span class="col-lg-9 col-md-8 col-sm-8 col-xs-6 item-value">
          {{ baseData.insuranceCentre.address }}
        </span>
      </div>
      <div class="row item-container">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 item-title">
          <q-icon name="mail_outline" style="font-size:20px" />
          <span class="text">ایمیل : </span>
        </div>
        <span class="col-lg-9 col-md-8 col-sm-8 col-xs-6 item-value">
          {{ baseData.insuranceCentre.email }}
        </span>
      </div>
      <div class="row item-container">
        <div class="col-12 item-title">
          <q-icon name="share" style="font-size:20px" />
          <span class="text">شبکه های اجتماعی : </span>
        </div>
        <span class="col-12 flex item-value social-media justify-end">
          <q-btn
            class="social-media-button"
            color="info"
            v-for="(item, index) in socialNetworks"
            :key="index"
            flat
            @click="openNewPage(item.url)"
          >
            <img width="30px" :src="item.iconUrl" />
          </q-btn>
        </span>
      </div>
    </div>
  </div>
</template>

  <script>
  import { defineComponent } from "vue";
  import services from "src/services/services";
  export default defineComponent({
    name: "ContactUs",
    data(){
        return{
           model: {
             aliasName: "",
             mobile: "",
             email: "",
             bocy: "",
           },
           baseData:[],
           socialNetworks: [],
           portal:[],
           isLoading:false,
        }
    },
    mounted() {
      this.getPortalLandingPage();
    },
    methods:{
      getPortalLandingPage() {
        services
          .getPortalLandingPage()
          .then((response) => {
             this.baseData=response.data.message;
             this.setSocialNetworks(this.baseData.insuranceCentrePortal);
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
      controlLength(event, maxlength) {
        var targetLength = event.target.value.length;
        if (event.which < 0x20) {
          return; 
        }
        if (targetLength == maxlength) {
          event.preventDefault();
        } else if (targetLength > maxlength) {
          event.target.value = event.target.value.substring(0, maxlength);
        }
      },
      async setSocialNetworks(data) {
        if (data.bale) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/bale.svg",
            url:data.bale,
          });
        }
        if (data.eitaa) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/eitaa.svg",
            url:data.eitaa,
          });
        }
        if (data.faceBook) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/facebook.svg",
            url:data.faceBook,
          });
        }
        if (data.igap) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/igap.svg",
            url:data.igap,
          });
        }
        if (data.instagram) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/instagram.svg",
           url:data.instagram,
         });
        }
        if (data.linkedin) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/linkedin.svg",
            url:data.linkedin,
          });
        }
        if (data.robika) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/robika.svg",
            url: data.robika,
          });
        }
       if (data.soroush) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/soroush.svg",
           url: data.soroush,
         });
       }
       if (data.telegram) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/telegram.svg",
           url: data.telegram,
         });
       }
       if (data.twitter) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/twitter-x.svg",
           url: data.twitter,
         });
       }
       if (data.whatsapp) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/whatsapp.svg",
           url: data.whatsapp,
         });
       }

  },
     async saveMessage()
     {
       this.isLoading=true;
       var response= await services.suggestionsCritic(this.model);
       this.$q.notify({
         color: (response.data.isSuccess)?'green-4':'red',
         textColor: 'white',
         icon: 'cloud_done',
         message: response.data.message
       })
       this.isLoading=false;
     },
     openNewPage(url) {
       window.open(url);
     },
     routeUrl(url) {
       window.location.href = url;
     }
    }
  });
  </script>
  <style lang="scss">
.contact-us-container {
  direction: rtl;
  padding: 140px 10% 10px;
  background-color: #e5e5e5;
  .title {
    padding-right: 10px;
    color: #000;
    font-size: 24px;
  }
  .input-container {
    padding: 5px 10px;
    .align-left{
      input{
        text-align: left !important;
      }
    }
  }
  .form-container .contact-us-input .q-field__inner {
    background: #e0e0e0;
    border-radius: 8px;
  }
  .form-container .q-field--outlined .q-field__control:before {
    border: none !important;
  }
  .form-container .contact-us-input.textarea-input .q-field__inner {
    padding: 0px 10px;
  }
  .form-container .contact-us-input.textarea-input .q-field__control {
    color: #26a69a;
  }
  .form-container .contact-us-input.textarea-input textarea {
    resize: none;
  }
  .q-field--standard .q-field__control:before {
    border: none !important;
  }
  .form-container .button-container {
    padding: 25px 10px 0px;
  }
  .form-container .button-container .form-button {
    width: 150px;
    height: 50px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 8px;
    background-color:var(--q-themeColor);
    color: #fff;
  }

}
.information-container {
  padding: 200px 20px 0px;
  .item-container + .item-container {
    margin-top: 15px;
  }
  .item-title {
    .phone-icon {
      width: 15px;
    }
    .text {
      color: #414141;
      margin-right: 15px;
      font-size: 16px;
      opacity: 0.7;
    }
  }
  .item-value {
    color: #1f2b7e;
    line-height: 36px;
    font-size: 16px;
  }
  .item-value.social-media {
    margin-top: 15px;
  }
  .social-media-button {
    border-radius: 50%;
    width: 55px;
    height: 50px;
  }
  .social-media-button + .social-media-button {
    margin-right: 20px;
  }
}
.information-container.is-metabimeh{
  padding: 20px 20px 0px;
}
.map-container {
  margin-top: 80px;
}
.mapouter{
  position:relative;
  text-align:right;
  height:400px;
  width:100%;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:400px;width:100%;
}
@media (max-width: 1024px) {
  .information-container {
    padding: 75px 0px;
  }
  .map-container {
    margin-top: 0px;
  }
  .information-container .social-media-button + .social-media-button {
    margin-right: 10px;
  }
}
</style> -->


<template>
  <div class="row q-gutter-sm contact-us-container" v-if="baseData && baseData.insuranceCentrePortal">
    <h3 class="col-12 title">تماس با ما</h3>
    <div class="row justify-around items-center">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 form-container">
      <q-form @submit="saveMessage">
        <div class="row">

          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 input-container">
            <q-input
              dir="rtl"
              class="contact-us-input label-right"
              :rules="[
                (val) => (val !== null && val !== '') || 'نام و نام خانوادگی الزامی است',
              ]"
              color="teal"
              outlined
              v-model="model['aliasName']"
              label="نام و نام خانوادگی"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 input-container">
            <q-input

              class="contact-us-input label-right"
               @keypress="controlLength($event,11)"
              :rules="[
                        val =>
                        (val !== null && val !== '') && val.length == 11 ||
                        'تلفن همراه الزامی است و شامل 11 رقم باشد'
                     ]"
              color="teal"
              outlined
              v-model="model['mobile']"
              type="number"
              label="تلفن همراه"
            >
            </q-input>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 input-container">
            <q-input
              class="contact-us-input label-right"
              color="teal"
              outlined
              v-model="model['email']"
              label="ایمیل"
            >
            </q-input>
          </div>
          <div class="col-12 input-container">
            <q-input
              class="contact-us-input textarea-input label-right"
              outlined
              dir="rtl"
              v-model="model['body']"
              label="متن پیام شما"
              type="textarea"
            />
          </div>
          <div class="col-12 button-container flex justify-end">
            <q-btn  class="form-button" type="submit">
                <q-spinner v-if="isLoading" color="#fff" size="1em"/>
              ارسال
   
            </q-btn>
          </div>
        </div>
      </q-form>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 information-container" >
      <div class="row items-center">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 item-title">
          <q-img
        class="consult-img q-my-sm"
        src="icons/undraw_envelope_re_f5j4.svg"
      ></q-img>
          </div>
      </div>
      <div class="row  item-container">
     
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 item-title">
          
          <q-icon name="call" style="font-size:20px" />
          <span class="text">شماره تلفن : </span>
        </div>
        <span class="col-lg-9 col-md-8 col-sm-8 col-xs-6 item-value">
          {{ baseData.insuranceCentre.phone }}
        </span>
      </div>
      <div class="row item-container">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 item-title">
          <q-icon name="location_on" style="font-size:20px" />
          <span class="text">آدرس : </span>
        </div>
        <span class="col-lg-9 col-md-8 col-sm-8 col-xs-6 item-value">
          {{ baseData.insuranceCentre.address }}
        </span>
      </div>
      <div class="row item-container">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-6 item-title">
          <q-icon name="mail_outline" style="font-size:20px" />
          <span class="text">ایمیل : </span>
        </div>
        <span class="col-lg-9 col-md-8 col-sm-8 col-xs-6 item-value">
          {{ baseData.insuranceCentre.email }}
        </span>
      </div>
      <div class="row item-container">
        <div class="col-12 item-title">
          <q-icon name="share" style="font-size:20px" />
          <span class="text">شبکه های اجتماعی : </span>
        </div>
        <span class="col-12 flex item-value social-media justify-end">
          <q-btn
            class="social-media-button"
            color="info"
            v-for="(item, index) in socialNetworks"
            :key="index"
            flat
            @click="openNewPage(item.url)"
          >
            <img width="30px" :src="item.iconUrl" />
          </q-btn>
        </span>
      </div>
    </div>
    </div>
  </div>

</template>

  <script>
  import { defineComponent } from "vue";
  import services from "src/services/services";
  // import LottieAnimation from 'src/components/lottieAnimation.vue'
  // import lottieData from 'src/contact.json';
  export default defineComponent({
    name: "ContactUs",
    data(){
        return{
           model: {
             aliasName: "",
             mobile: "",
             email: "",
             bocy: "",
           },
           baseData:[],
          //  lottieData : lottieData,
           socialNetworks: [],
           portal:[],
           isLoading:false,
        }
    },
    components : {
      // LottieAnimation
    },
    mounted() {
      this.getPortalLandingPage();
    },
    methods:{
      getPortalLandingPage() {
        services
          .getPortalLandingPage()
          .then((response) => {
             this.baseData=response.data.message;
             this.setSocialNetworks(this.baseData.insuranceCentrePortal);
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
      controlLength(event, maxlength) {
        var targetLength = event.target.value.length;
        if (event.which < 0x20) {
          // e.which < 0x20, then it's not a printable character
          // e.which === 0 - Not a character
          return; // Do nothing
        }
        if (targetLength == maxlength) {
          event.preventDefault();
        } else if (targetLength > maxlength) {
          // Maximum exceeded
          event.target.value = event.target.value.substring(0, maxlength);
        }
      },
      async setSocialNetworks(data) {
        if (data.bale) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/bale.svg",
            url:data.bale,
          });
        }
        if (data.eitaa) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/eitaa.svg",
            url:data.eitaa,
          });
        }
        if (data.faceBook) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/facebook.svg",
            url:data.faceBook,
          });
        }
        if (data.igap) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/igap.svg",
            url:data.igap,
          });
        }
        if (data.instagram) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/instagram.svg",
           url:data.instagram,
         });
        }
        if (data.linkedin) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/linkedin.svg",
            url:data.linkedin,
          });
        }
        if (data.robika) {
          this.socialNetworks.push({
            iconUrl: "icons/social-networks/robika.svg",
            url: data.robika,
          });
        }
       if (data.soroush) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/soroush.svg",
           url: data.soroush,
         });
       }
       if (data.telegram) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/telegram.svg",
           url: data.telegram,
         });
       }
       if (data.twitter) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/twitter-x.svg",
           url: data.twitter,
         });
       }
       if (data.whatsapp) {
         this.socialNetworks.push({
           iconUrl: "icons/social-networks/whatsapp.svg",
           url: data.whatsapp,
         });
       }

  },
     async saveMessage()
     {
       this.isLoading=true;
       var response= await services.suggestionsCritic(this.model);
       this.$q.notify({
         color: (response.data.isSuccess)?'green-4':'red',
         textColor: 'white',
         icon: 'cloud_done',
         message: response.data.message
       })
       this.isLoading=false;
     },
     openNewPage(url) {
       window.open(url);
     },
     routeUrl(url) {
       window.location.href = url;
     }
    }
  });
  </script>
  <style lang="scss" scoped>
.contact-us-container {
  direction: rtl;
  padding: 140px 10% 10px;
  background-color: #fff;
  .title {
    padding-right: 10px;
    color: var(--q-themeColor);
    font-size: 24px;
  }
  .input-container {
    padding: 5px 10px;
    .align-left{
      input{
        text-align: left !important;
      }
    }
  }
  .form-container .contact-us-input .q-field__inner {
    background: #e0e0e0;
    border-radius: 8px;
  }
  .form-container .q-field--outlined .q-field__control:before {
    border: none !important;
  }
  .form-container .contact-us-input.textarea-input .q-field__inner {
    padding: 0px 10px;
  }
  .form-container .contact-us-input.textarea-input .q-field__control {
    color: #26a69a;
  }
  .form-container .contact-us-input.textarea-input textarea {
    resize: none;
  }
  .q-field--standard .q-field__control:before {
    border: none !important;
  }
  .form-container .button-container {
    padding: 25px 10px 0px;
  }
  .form-container .button-container .form-button {
    width: 150px;
    height: 50px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 8px;
    background-color:#b2208b;
    color: #fff;
  }

}
.information-container {
  // padding: 200px 20px 0px;
  .item-container + .item-container {
    margin-top: 15px;
  }
  .item-title {
    //  min-width: 150px;
    .phone-icon {
      width: 15px;
    }
    .text {
      color: #414141;
      margin-right: 15px;
      font-size: 16px;
      opacity: 0.7;
    }
  }
  .item-value {
    color: #1f2b7e;
    line-height: 36px;
    font-size: 16px;
  }
  .item-value.social-media {
    margin-top: 15px;
  }
  .social-media-button {
    border-radius: 50%;
    width: 55px;
    height: 50px;
  }
  .social-media-button + .social-media-button {
    margin-right: 20px;
  }
}
.information-container.is-metabimeh{
  padding: 20px 20px 0px;
}
.map-container {
  margin-top: 80px;
}
.mapouter{
  position:relative;
  text-align:right;
  height:400px;
  width:100%;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:400px;width:100%;
}
@media (max-width: 1024px) {
  .information-container {
    padding: 75px 0px;
  }
  .map-container {
    margin-top: 0px;
  }
  .information-container .social-media-button + .social-media-button {
    margin-right: 10px;
  }
}

.consult-img{
  width: 270px !important;
}

@media screen and (max-width : 600px) {
  .consult-img{
  width: 100% !important;
  height: auto !important;
}
}
</style>

