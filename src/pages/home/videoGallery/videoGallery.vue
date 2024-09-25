<template>
    <div class="videoes-gallery-section flex column  justify-center q-mr-md items-center q-py-xl">
        <h3 class="gallery-title q-my-md q-mx-lg">گالری ویدئوها</h3>
         <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
        <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        <div class="row videoes-gallery-container">
          <div v-if="!showMore" class="col-12 flex justify-center items-center">
            <div @click="openDialog(item.metaMediaFileUrl , item.title)" class="q-pa-md relative-position" v-for="item in videoGalleries.slice(0,4)" :key="item.id">
            <video   ref="videoPlayer"   class="video"   width="100%">
            <source :src="item.metaMediaFileUrl" type="video/mp4" />
           Your browser does not support the video tag.
            </video>
           <div  class="cursor-pointer"><q-img  width="60px" class="absolute-center" src="images/play-button-round-icon.svg"></q-img></div>
           </div>
          </div>
          <div v-else class="col-12 flex justify-center items-center">
            <div @click="openDialog(item.metaMediaFileUrl , item.title)" class="q-pa-md relative-position" v-for="item in videoGalleries" :key="item.id">
            <video   ref="videoPlayer"   class="video"   width="100%">
            <source :src="item.metaMediaFileUrl" type="video/mp4" />
           Your browser does not support the video tag.
            </video>
           <div  class="cursor-pointer"><q-img  width="60px" class="absolute-center" src="images/play-button-round-icon.svg"></q-img></div>
           </div>
          </div>
        </div>
        <div v-if="videoGalleries.length > 4" class="col-12 show-more-button-container flex justify-center items-center">
          <a class="show-more-button flex justify-center items-center" rounded @click="handleShowMore" >
            <q-icon size="36px" v-if="!showMore"  name="expand_more" />
            <q-icon size="36px"  v-else  name="expand_less" />
          </a>
       </div>
    </div>
 
 <q-dialog
     class="Dialog"
      v-model="showDialog"
       :full-width="$q.screen.lt.lg"
    >
      <q-card  :class="{ 'lg-width': $q.screen.gt.md }">
        <q-card-actions align="right" class="bg-white text-white">
           <q-badge flat class="popup-btn cursor-pointer q-pa-sm rounded-borders bg-red-5" v-close-popup> بستن</q-badge>
        </q-card-actions>

        <q-card-section class="q-pt-none">
          <video ref="videoPlayer" controls style="width: 100% !important;border-radius: 10px !important;max-height: 600px;">
              <source :src="selectedVideoUrl" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "VideoGallery",
  components:{
    
  },
  props: {
    data:{}
  },
  data() {
    return {
      videoGalleries: [],
      showDialog: false,
      selectedVideoUrl : '' ,
      videoTitle : '',
      showMore: false,
    };
  },

  mounted() {
     this.baseData=this.data;
     this.videoGalleries=this.baseData.videoGalleries;
  },

  methods: {
    openDialog(videoUrl , videoTitle) {
      this.showDialog = true;
      this.selectedVideoUrl = videoUrl;
      this.videoTitle = videoTitle;
    },
     handleShowMore(){
      this.showMore=!this.showMore
     }
 }

   
});
</script>

<style lang="scss">
.videoes-gallery-section{
    width: 100%;
   .videoes-gallery-container{
    margin-top: 30px;
    .flicking-arrow-prev::before, .flicking-arrow-prev::after, .flicking-arrow-next::before, .flicking-arrow-next::after {
      width: 16px !important;
      height: 5px !important;
    }
   }
   .show-more-button{
      width: 40px;
      height: 40px;
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid #ccc;
     }
   .icon-color{
    fill: var(--q-Blue);
   }
   .popup-btn{
     outline: none !important;
     box-shadow: none !important;
   }
   .gallery-title {
     font-size: 26px;
     margin-right: 13px !important;
     color: #003975 !important;
     text-align: right;
   }
  .video{
    width: 250px;
    border-radius: 16px !important;
    max-height: 250px;
    cursor: pointer;
  }
}
.lg-width {
  width: 70% !important;
  max-width: 70% !important;
  margin: 0 auto;
}
</style>
