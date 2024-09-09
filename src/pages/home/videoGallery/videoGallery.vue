<template>
    <div class="row justify-center q-mr-md items-center q-py-xl">
      <h3 class="gallery-title q-my-md q-mx-lg">گالری ویدئوها</h3>
      <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
      <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>

    </div>
 <div class="row justify-around items-center q-py-lg">
  <div class="col-md-4 col-sm-6 q-pa-md relative-position" v-for="item in InsuranceVideoGalleries.filter(item => item.id !== 51361)" :key="item.id">
    <video  ref="videoPlayer"   class="expand-video"   width="100%">
              <source :src="item.metaMediaFileUrl" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div @click="openDialog(item.metaMediaFileUrl , item.title)" class="cursor-pointer"><q-img  width="60px" class="absolute-center" src="src/assets/play-button-round-icon.svg"></q-img></div>
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
          <video ref="videoPlayer"   class="expand-video" controls   style="width: 100% !important;border-radius: 10px !important;">
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

export default defineComponent({
  name: "VideoGallery",

  data() {
    return {
      InsuranceVideoGalleries: [],
      currentSlide: "0",
      autoplay: true,
      autoplayInterval: 3000,
      numSlides: 0,
      showDialog: false,
      selectedVideoUrl : '' ,
      videoTitle : ''
    };
  },

  mounted() {
    this.getPolicyIntroduction();
  },

  methods: {
    getPolicyIntroduction() {
      services
        .getPortalLandingPage()
        .then((response) => {
          this.InsuranceVideoGalleries =
            response.data.message?.videoGalleries || [];
          // this.numSlides = Math.ceil(this.InsuranceVideoGalleries.length / 3);
        })
        .catch((error) => {
          console.error("Error fetching insurance centre info:", error);
        });
    },
 
    openDialog(videoUrl , videoTitle) {
      this.showDialog = true;
      this.selectedVideoUrl = videoUrl;
      this.videoTitle = videoTitle;
    },
 }

  // watch: {
  //   currentSlide(newSlide) {
  //     if (newSlide === this.numSlides.toString()) {
  //       this.currentSlide = "0"; // Reset the slide to the first one
  //     }
  //   },
  // },
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
video{
  border-radius: 16px !important;
}

.lg-width {
  width: 70% !important;
  max-width: 70% !important;
  margin: 0 auto;
}


</style>
