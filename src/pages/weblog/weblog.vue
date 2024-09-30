<template>
   <div style="direction:rtl;padding-right:10%;padding-left:10%;">
    <div class="row">
      <h5 v-if="baseData.insuranceCentre"
       style="width:100%;text-align:center;padding-top:100px;padding-bottom:0px;">
         {{baseData.insuranceCentre.centerName!=null && baseData.insuranceCentre.centerName!=undefined ?  baseData.insuranceCentre.centerName : ''  + ' وبلاگ' }}
      </h5>
    </div>
    <div class="row" v-if="baseData.insuranceCentre">
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"   style="padding-right: 20px;padding-left: 20px;margin-top: 15px;">

        <q-card flat bordered class="my-card">
          <q-card-section>
            <h2 class="text-h6">مطالب جدید</h2>
          </q-card-section>
          <span v-for="(item,index) in articles" :key="index">

            <q-separator inset v-if="index"/>
            <q-card-section style="padding-top: 10px;cursor:pointer;    font-weight: 800;"
            @click="openArticle(item)" class="q-pt-none">
               <h3  style="font-size: 16px;font-weight: 800;line-height: 2;">
               {{item.title}}
               <span style="color: #4e4747ad;">
                ({{item.articleGroup}})
               </span>
               </h3>
            </q-card-section>

          </span>

        </q-card>
      </div>
      <div class="row col-lg-8 col-md-8 col-sm-8 col-xs-12" style="padding-right: 20px;padding-left: 20px;margin-top: 5px;margin-bottom: 5px;">
            <q-card class="col-lg-6 col-md-12 col-sm-12 col-xs-12 my-card" flat v-for="(item,index) in articles" style="padding:10px" :key="index">
              <div class="weblog-item flex column">
              <q-card-section vertical  style="flex-grow:1">
                <q-card-section class="col-sm-5 col-xs-12 flex flex-center">
                  <q-img
                    width="100%"
                    height="200px"
                    class="rounded-borders"
                    :src="item.metaMediaFileUrl"
                    :alt="item.title"
                  />
                </q-card-section>
                <q-card-section class="q-pt-xs flex column">
                  <h3 class="text-overline">{{item.articleGroup}}</h3>
                  <h2 class="text-h6">{{item.title}}</h2>
                  <div class="text-caption text-grey" style="flex-grow:1"   >
                    {{stripHtml(item.body)}}
                  </div>
                </q-card-section>

              </q-card-section>
                 <q-separator />
              <q-card-actions style="height:60px">
                <q-btn flat round icon="event" />
                <q-btn flat>
                  {{item.publishPersianDate}}
                </q-btn>
                <q-space />
                <q-btn flat color="primary"  @click="openArticle(item)">
                  ادامه مطلب
                </q-btn>
              </q-card-actions>
              </div>
            </q-card>
      </div>

    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import services from "src/services/services";
  export default defineComponent({
      name: "commonFaq",
      data(){
          return{
            baseData:[],
            articles:{}
          }
      },
      mounted() {
        this.getPortalLandingPage();
        this.init();
       },

     methods:{
       async init(){
         let response=await services.getWeblog();
         this.articles=response.data.message;
         console.log("this is weblog",response.data.message);
       },
       getPortalLandingPage() {
        services
          .getPortalLandingPage()
          .then((response) => {
             this.baseData=response.data.message;
          })
          .catch((error) => {
            console.error('Error fetching insurance centre info:', error);
          });
      },
      openArticle(article)
      {
        window.open('./article/'+article.id)
      },
      stripHtml(html)
      {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        var str = tmp.textContent || tmp.innerText || "";
        if(str.length>300)
          str=str.substr(0,300)+"..."
        return str
      }
     }
  });
</script>
<style lang="scss">
  .weblog-item{
    border:1px solid #ccc !important;
    width:100%;
    height: 100%;
  }
</style>

