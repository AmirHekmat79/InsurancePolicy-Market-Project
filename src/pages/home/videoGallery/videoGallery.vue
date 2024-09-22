<template>
    <div class="videoes-gallery-section flex column  justify-center q-mr-md items-center q-py-xl">
        <h3 class="gallery-title q-my-md q-mx-lg">گالری ویدئوها</h3>
         <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
        <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        <div class="videoes-gallery-container">
     <Flicking  :options="{ align: 'center',circular: true, }" :plugins="plugins">
        <div @click="openDialog(item.metaMediaFileUrl , item.title)" class="q-pa-md relative-position" v-for="item in videoGalleries" :key="item.id">
        <video   ref="videoPlayer"   class="video"   width="100%">
         <source :src="item.metaMediaFileUrl" type="video/mp4" />
         Your browser does not support the video tag.
        </video>
       <div  class="cursor-pointer"><q-img  width="60px" class="absolute-center" src="src/assets/play-button-round-icon.svg"></q-img></div>
      </div>
       <template #viewport>
         <span class="flicking-arrow-prev"></span>
         <span class="flicking-arrow-next"></span>
         <div class="flicking-pagination"></div>
       </template>
     </Flicking>
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
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
export default defineComponent({
  name: "VideoGallery",
  components:{
    Flicking
  },
  data() {
    return {
      videoGalleries: [],
      showDialog: false,
      selectedVideoUrl : '' ,
      videoTitle : '',
      plugins: [new Arrow(),new Pagination({ type: 'bullet' })]
    };
  },

  mounted() {
   this.baseData=JSON.parse(localStorage.getItem("baseData"));
   this.videoGalleries=this.baseData.videoGalleries;
  },

  methods: {
    openDialog(videoUrl , videoTitle) {
      this.showDialog = true;
      this.selectedVideoUrl = videoUrl;
      this.videoTitle = videoTitle;
    },
 }

   
});
</script>

<style lang="scss">
.videoes-gallery-section{
    width: 100%;
   .videoes-gallery-container{
    width: 80% !important;
    .flicking-arrow-prev::before, .flicking-arrow-prev::after, .flicking-arrow-next::before, .flicking-arrow-next::after {
      width: 16px !important;
      height: 5px !important;
    }
}
}

.icon-color{
  fill: var(--q-Blue);
}
.popup-btn{
  outline: none !important;
  box-shadow: none !important;
}
.gallery-title {
  font-size: 32px;
  font: 32px "iransans";
  margin-right: 13px !important;
  color: #003975 !important;
  text-align: right;
}
.video{
  width: 200px;
  border-radius: 16px !important;
  max-height: 200px;
  cursor: pointer;
}
.lg-width {
  width: 70% !important;
  max-width: 70% !important;
  margin: 0 auto;
}
</style>
