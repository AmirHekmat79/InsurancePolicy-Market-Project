<template>
    <div class="row justify-center q-mr-md items-center q-py-xl">
      <h3 class="gallery-title q-my-md q-mx-lg">گالری ویدئوها</h3>
      <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
      <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>

    </div>
 <div class="row justify-around items-center q-py-lg">
  <!-- <Carousel v-bind="settings" :breakpoints="breakpoints">
      <Slide class="col-md-4 col-sm-6 q-pa-md relative-position" v-for="item in videoGalleries" :key="item.id">
        <video  ref="videoPlayer"   class="video"   width="100%">
                  <source :src="item.metaMediaFileUrl" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div @click="openDialog(item.metaMediaFileUrl , item.title)" class="cursor-pointer"><q-img  width="60px" class="absolute-center" src="src/assets/play-button-round-icon.svg"></q-img></div>
      </Slide>
         <template #addons>
           <Navigation />
           <Pagination />
         </template>
     </Carousel> -->
  
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
import services from "src/services/services";
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default defineComponent({
  name: "VideoGallery",
  components:{
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
  },
  data() {
    return {
      videoGalleries: [],
      showDialog: false,
      selectedVideoUrl : '' ,
      videoTitle : '',
      settings: {
       itemsToShow: 3,
       snapAlign: 'center',
      },
      breakpoints: {
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      900: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      768: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      600: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      480: {
        itemsToShow:1,
        snapAlign: 'center',
      },
      300: {
        itemsToShow:1,
        snapAlign: 'center',
      },
      },
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

<style scoped>
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
  border-radius: 16px !important;
  max-height: 200px;
}

.lg-width {
  width: 70% !important;
  max-width: 70% !important;
  margin: 0 auto;
}


</style>
