<template>
  <div v-if="article" class="article-container">
          <div class="row" style="padding-top:80px">
            <q-card class="my-card" flat bordered   style="margin-bottom: 30px;">
              <q-card-section vertical>
                <q-card-section class="col-sm-5 col-xs-12 row flex flex-center">
                  <div class="col-12 flex column justify-center items-center">
                    <h1 style="margin: 0px 0px 15px;" class="text-h6">{{article.title}}</h1>
                    <div style="color:#797979">
                      <q-icon name="schedule"   />
                      {{article.publishPersianDate}}
                    </div>
                    <q-separator class="q-mt-md" />
                     <q-img  class="rounded-borders q-mt-lg"
                     :alt="article.title"
                     :src="article.metaMediaFileUrl" style="max-width:500px"   />
                  </div>

                </q-card-section>
                <q-card-section class="q-pt-xs">
                  <div style="margin-top:15px" v-html="article.body" >
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import services from "src/services/services";
export default defineComponent({
  name: "ArticlePage",
  data(){
      return{
        article:{},
      }
  },
  mounted(){
    this.init()
  },
  methods:{
    async init(){
      let response=await services.getArticle(this.$route.params.id);
      this.article=response.data.message.article;
      console.log("this is response.data",response.data.message.article)
    }
  }
});

</script>
<style lang="scss">
  .article-container{
    direction: rtl;
    padding-right: 10%;
    padding-left: 10%;
    padding-top: 70px;
    .my-card{
       width: 100%;
    }
  }
  .article-footer{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    font-size: 13px;
    color: #969696;
    padding-top: 10px;
  }
</style>

