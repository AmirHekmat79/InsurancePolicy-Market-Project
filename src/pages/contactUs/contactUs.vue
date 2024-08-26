<template>
    <q-page>
        <div class="title row justify-center items-center text-center q-py-md q-mr-sm">
            <span class="q-pr-sm text-primary text-weight-bolder contact-title">تماس با ما</span>
            <svg width="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path class="icon-color" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>

          </div>
      <section dir="rtl" class="q-pa-lg q-mx-auto text-center">

          <div class="row justify-center items-center reverse-wrap text-center q-gutter-md">
            <div class="col-md-6  col-xs-12 text-center q-gutter-md form-bg q-pa-xl rounded-borders ">
              <q-input v-model="text"  bg-color="white" filled
                >
                <template v-slot:append>
                    <q-avatar>
                      <q-icon name="person" class="fontSize-icon" ></q-icon>
                    </q-avatar>
                    </template> 
                        <template v-slot:prepend>
                            <label>نام و نام خانوادگی</label>
                    </template>
                </q-input>
              <q-input v-model="text"  bg-color="white" filled
                >
                <template v-slot:append>
                    <q-avatar>
                      <q-icon name="phone" class="fontSize-icon" ></q-icon>
                    </q-avatar>
                    </template> 
                        <template v-slot:prepend>
                            <label>تلفن همراه  </label>
                    </template>
                </q-input>
              <q-input v-model="text" bg-color="white"  filled
                >
                <template v-slot:append>
                    <q-avatar>
                    <q-icon  name="email" class="fontSize-icon" ></q-icon>
                    </q-avatar>
                    </template> 
                        <template v-slot:prepend>
                            <label>ایمیل </label>
                    </template>
                </q-input>
               
          
                <q-input
                v-model="message"
                type="textarea"
                placeholder="متن پیام شما..."
                bg-color="white"
                filled
                rows="4"
            />
            <q-btn style="width: 50%;" class="send-btn text-center q-mx-auto text-white q-my-xl">ارسال</q-btn>
            </div>
            <!-- <div class="col-md-6  rounded-borders font-style">
             <div class="info-container">
              <div class=" q-my-md ">
                <span  class="text-warning">
                    شماره تلفن :
                </span>
                <span class="text-white">
                    02188308288</span>
              </div>
              <div class=" q-my-md ">
                <span class="text-warning">
                     آدرس :
                </span>
                <span class="text-white">
                    تهران خیابان قائم مقام فراهانی، خیابان سنایی، خیابان مشاهیر، خیابان غفاری، پلاک 12</span>
              </div>
              <div class=" q-my-md ">
                <span   class="q-my-md text-warning">
                    ایمیل :
                </span>
                <span class="text-white">
                    
            info@qbimeh.ir
        </span>
              </div>
              <div>
                  <span  class="text-warning text-center">
                      شبکه های اجتماعی : 
                  
                  </span>
                  <a class="cursor-pointer">
          <q-img width="22px" src="/src/icons/whatsapp.svg"/>
         </a>
      <a class="cursor-pointer">
          <q-img width="22px" src="/src/icons/twitter-x.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="22px"  src="/src/icons/telegram.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px" src="/src/icons/robika.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img  width="22px"  src="/src/icons/linkedin.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px" src="/src/icons/instagram.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px" src="/src/icons/facebook.svg"/>
              </a>
              <a class="cursor-pointer">
                  <q-img   width="22px"  src="/src/icons/eitaa.svg"/>
              </a>
              <a class="cursor-pointer"><q-img width="22px" src="/src/icons/bale.svg"/></a>  
                </div>
             </div>
            </div> -->

            <div class="col-md-4  text-right rounded-borders font-style">
              <div>
            <LottieAnimation
            :animationData="lottieData"
            :loop="true"
             style="width: 400px; margin: auto;"
            :autoplay="true"
            />
          </div>
             <div>
              <div class=" q-my-sm">
                <span  class="text-primary">
                    شماره تلفن :
                </span>
                <span class="text-black">
                    02188308288</span>
              </div>
              <div class=" q-my-md ">
                <span class="text-primary">
                     آدرس :
                </span>
                <span class="text-black">
                    تهران خیابان قائم مقام فراهانی، خیابان سنایی، خیابان مشاهیر، خیابان غفاری، پلاک 12</span>
              </div>
              <div class=" q-my-md ">
                <span   class="q-my-md text-primary">
                    ایمیل :
                </span>
                <span class="text-black">
                    
            info@qbimeh.ir
        </span>
              </div>
              <div>
           <div class="row justify-start items-center">
            <span  class="text-primary">
                      شبکه های اجتماعی : 
                 
                  </span>
                  <a class="cursor-pointer">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="38" height="38" fill="url(#pattern0_232_5095)"/>
                    <defs>
                    <pattern id="pattern0_232_5095" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_232_5095" transform="scale(0.0078125)"/>
                    </pattern>
                    <image id="image0_232_5095" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                    </defs>
                    </svg>
         </a>
      <a class="cursor-pointer">
        <svg width="38" height="38" class="icon-color" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="38" height="38" fill="url(#pattern0_232_5093)"/>
        <defs>
        <pattern id="pattern0_232_5093" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_232_5093" transform="scale(0.0078125)"/>
        </pattern>
        <image id="image0_232_5093" width="128" height="128" xlink:href="data:image/png;base64,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"/>
        </defs>
        </svg>

              </a>
              <a class="cursor-pointer">
                <svg width="38" height="38" class="icon-color" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="38" height="38" fill="url(#pattern0_232_5094)"/>
                <defs>
                <pattern id="pattern0_232_5094" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_232_5094" transform="scale(0.0078125)"/>
                </pattern>
                <image id="image0_232_5094" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>

              </a>
              <!-- <a class="cursor-pointer">
                 <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>robika</title><path class="cls-1" d="M256,0h0C397.38,0,512,114.62,512,256h0c0,141.38-114.62,256-256,256h0C114.62,512,0,397.38,0,256H0C0,114.62,114.62,0,256,0Z"/><path class="cls-2" d="M254.93,76h1.17c.32,28.3-.17,85.05-.17,85.05-27.05-15.18-54.29-30-81.33-45.22q26.57-15.11,53.18-30.13c8.4-4.74,17.43-8.82,27.15-9.7Z"/><path class="cls-2" d="M256,76h2c10.52.95,20,6,29.09,11q25.32,14.28,50.58,28.68c-27.15,15-54.6,30.34-81.78,45.35-.23-28.3.41-56.8.1-85.09Z"/><path class="cls-2" d="M174.62,115.82,256,161l-81.9,47.85s0-30.36.06-45.5C174,147.66,174.62,115.82,174.62,115.82Z"/><path class="cls-2" d="M337.78,115.74l.23.13c-.06,28.2,0,56.4,0,84.6,0,2.76-.07,8.46-.07,8.46l-82-47.86s54.68-30.26,81.85-45.33Z"/><path class="cls-2" d="M338,115.88c18.06,10.27,36,20.77,53.94,31.23,8.68,4.88,17.88,10.28,22.62,19.46C389.1,180.65,337.91,209,337.91,209s0-5.7,0-8.46v-84.6Z"/><path class="cls-2" d="M122.79,145.54c17-9.93,51.77-29.72,51.77-29.72l-.46,93.06s-51-28.11-76.33-42.15C103.29,156.88,113.26,150.91,122.79,145.54Z"/><path class="cls-3" d="M255.88,161.06l82,47.87s-26.38,14.57-39.48,21.61c-14,8-42.43,23.72-42.43,23.72l-81.88-45.38Z"/><path class="cls-2" d="M92,203.81c.07-12.47-.15-25.73,5.73-37.08,25.39,14,76.32,42.15,76.32,42.15C146.66,224.72,119.4,240.79,92,256.65Z"/><path class="cls-2" d="M414.51,166.57c5,9.34,5.72,20.2,5.44,30.59v59.66l-82-47.87Z"/><path class="cls-4" d="M174.05,208.88c.13,0,81.88,45.38,81.88,45.38s0,47.47,0,70.69c.13,7.48,0,22.59,0,22.59-27.32-15.09-54.5-30.3-81.84-45.39l0-.2V208.88Z"/><path class="cls-2" d="M92,256.65c27.38-15.89,54.64-31.93,82-47.77q0,46.55,0,93.07c-4.2-1.76-8-4.26-12-6.38-23.31-12.83-46.56-25.95-70-38.65Z"/><path class="cls-5" d="M337.91,209V266c-.08,12.1.31,24.15,0,36.24-27.28,14.83-82,45.29-82,45.29s.18-15.11,0-22.59c0-23.22,0-70.69,0-70.69Z"/><path class="cls-2" d="M337.91,209s82,47.76,82,47.87c-27.26,15.11-82,45.43-82,45.43.3-12.09-.09-24.14,0-36.24V209Z"/><path class="cls-2" d="M92,256.92c23.41,12.72,46.63,25.82,70,38.67,4,2.12,7.84,4.63,12,6.38l.05.2-75.46,44c-2.65-4-4-8.73-4.94-13.41C92.09,325,92,317,92,309.09V256.91Z"/><path class="cls-2" d="M419.94,256.82c0,18.31,0,36.62,0,54.93.26,11.74-.08,24.25-6.34,34.6-22.64-13.25-75.7-44.1-75.7-44.1S392.68,271.93,419.94,256.82Z"/><path class="cls-2" d="M98.62,346.17q37.74-22,75.48-44c-.16,31,.06,62-.1,93q-26.72-15.06-53.3-30.37C112.41,359.91,103.92,354.46,98.62,346.17Z"/><path class="cls-2" d="M174.09,302.15c27.34,15.09,54.52,30.3,81.84,45.39C228.65,363.43,174,395.21,174,395.18,174.15,364.18,173.93,333.16,174.09,302.15Z"/><path class="cls-2" d="M337.79,302.31l.13-.06c.08,31-.17,62,.13,93.05l-.21.1c-21.63-12.92-43.51-25.43-65.23-38.2-5.47-3.11-16.68-9.66-16.68-9.66S310.51,317.17,337.79,302.31Z"/><path class="cls-2" d="M337.92,302.25c2.42,1.65,53.06,30.87,75.7,44.1-3.22,5.49-8.32,9.52-13.45,13.13-8.29,5.58-17.14,10.25-25.76,15.26-12.12,6.86-24.17,13.85-36.36,20.53-.3-31-.05-62-.13-93Z"/><path class="cls-2" d="M255.93,347.54v88c-6.78-1-14.18-2.57-20.19-6-20.58-11.43-41.23-22.79-61.75-34.37C201.25,379.27,228.65,363.46,255.93,347.54Z"/><path class="cls-2" d="M255.93,347.54s11.21,6.55,16.68,9.66c21.72,12.77,43.6,25.28,65.23,38.2q-31.65,17.5-63.28,35.09a41.29,41.29,0,0,1-17.13,5.07h-1.5Z"/></svg>
              </a> -->
              <a class="cursor-pointer">
                <svg width="36" height="36" class="icon-color" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="36" height="36" fill="url(#pattern0_232_5092)"/>
                <defs>
                <pattern id="pattern0_232_5092" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_232_5092" transform="scale(0.0078125)"/>
                </pattern>
                <image id="image0_232_5092" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>

              </a>
              <a class="cursor-pointer"  >
                <svg width="38" height="39" class="icon-color" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="38" height="39"  fill="url(#pattern0_232_5090)"/>
                <defs>
                <pattern id="pattern0_232_5090" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_232_5090" transform="matrix(0.00801809 0 0 0.0078125 -0.0131579 0)"/>
                </pattern>
                <image id="image0_232_5090" width="128" height="128" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>

              </a>
              <a class="cursor-pointer">
                <svg width="38" height="38" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="icon-color" d="M510.797 232.576C510.131 221.624 508.237 210.668 505.83 199.921C499.487 170.911 487.762 143.16 471.793 118.129C435.758 61.4656 376.591 19.8708 310.784 6.04676C301.13 3.80597 291.33 2.24904 281.457 1.38756C268.47 -0.0278118 255.386 -0.319027 242.35 0.517161C231.708 0.895768 221.113 2.12853 210.667 4.20356C201.093 5.53476 191.78 8.19716 182.507 10.7008C173.855 13.4144 165.258 16.4864 156.861 20.0192C148.85 23.3634 141.025 27.1389 133.422 31.3293C125.885 35.3948 118.587 39.889 111.565 44.7898C109.831 46.0631 108.018 47.226 106.138 48.2714C88.6323 34.9594 70.9222 21.9648 52.4953 9.98916C47.4316 6.86596 42.5164 3.33316 36.8332 1.43876C27.5199 -1.83804 16.6195 0.670761 9.29786 7.32676C2.32954 13.5066 -0.686143 23.1322 0.133057 32.2919C0.184257 44.4724 0.0818569 56.7092 0.235457 68.8896C0.0818569 81.1777 0.184257 93.5578 0.133057 105.846C0.081857 118.134 0.0818567 130.422 0.184257 142.71C0.0818567 157.046 0.0818567 171.36 0.184257 185.651C0.0818567 199.571 0.0989236 213.492 0.235457 227.415C0.337857 244.823 -0.583743 262.323 1.35674 279.675C2.73914 297.539 6.42554 315.249 11.7503 332.293C36.0089 411.576 101.473 477.189 181.12 500.383L181.171 500.69C197.755 505.605 214.799 509.24 231.997 510.566C251.085 512.41 270.433 512.358 289.423 509.445C299.612 508.677 309.591 506.168 319.57 503.967C331.025 500.92 342.283 497.174 353.28 492.749C363.571 488.346 373.76 483.584 383.432 477.85C392.023 472.989 400.296 467.586 408.202 461.676C417.447 454.856 426.218 447.419 434.458 439.414C440.804 433.253 446.819 426.758 452.475 419.958C458.032 413.328 463.249 406.421 468.106 399.263C472.509 392.714 476.605 385.905 480.548 379.044C484.587 371.267 488.479 363.484 491.96 355.451C495.749 345.825 499.487 336.154 502.144 326.175C504.397 317.983 506.854 309.791 507.674 301.348C509.824 292.444 510.797 283.075 511.155 273.966C512.391 260.191 512.271 246.328 510.797 232.576ZM417.029 198.999C413.906 207.293 408.427 214.405 401.925 220.344C396.247 225.976 390.615 231.654 384.932 237.338C378.895 243.374 372.854 249.365 366.868 255.457C361.083 261.187 355.297 266.921 349.517 272.758C343.219 279.05 336.87 285.348 330.629 291.646C323.461 298.86 316.247 305.982 309.079 313.19C302.321 320 295.516 326.753 288.707 333.563C281.897 340.373 274.99 347.228 268.18 354.089C261.888 360.126 256.154 366.833 249.042 372.009C240.164 377.554 229.867 380.4 219.402 380.201C207.324 379.433 195.502 374.677 186.798 366.177C160.031 339.41 133.245 312.615 106.44 285.793C99.8911 279.291 95.4879 270.899 93.1276 262.042C90.67 249.81 92.1036 236.708 98.4012 225.807C103.209 217.359 110.582 210.652 118.973 205.839C128.204 201.476 138.464 199.757 148.613 200.873C159.565 202.511 170.056 207.529 177.736 215.613C192.271 230.149 206.756 244.736 221.394 259.226C225.797 255.027 230.047 250.624 234.245 246.272C240.389 240.389 246.426 234.348 252.308 228.152C258.145 222.73 263.726 216.996 269.25 211.21C273.193 207.683 276.777 203.791 280.566 200.054C286.71 194.063 292.695 187.976 298.685 181.883C304.466 176.358 310.047 170.619 315.627 164.987C321.664 159.104 327.552 153.062 333.547 147.123C339.58 140.98 346.98 136.35 355.144 133.612C365.622 130.69 376.73 130.93 387.072 134.303C400.23 139.32 410.772 149.663 416.558 162.401C420.813 174.126 421.325 187.228 417.029 198.999Z"/>
                </svg>
              </a>  
           </div>
                </div>
             </div>
           
            </div>
          </div>
      </section>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import LottieAnimation from '../../components/lottie-animation.vue';
  import lottieData from 'src/contact.json';
  export default defineComponent({
    name: "ContactUs",
    data(){
        return{
            message : '' ,
            lottieData: lottieData
        }
    },
    components: {
      LottieAnimation
    },
  });
  </script>
  
<style scoped>
.send-btn{
  background: var(--q-Blue);
}
.icon-color{
  fill:var(--q-Blue) !important;
}
.form-bg{
  background: #EEEE;
  background-position: center;
  background-size: cover;
  height: 80vh;
}
.contact-title{
  font-size: 32px;
}
.font-style{
  font-size: 18px;
}

/* .sadsadasd{
  fill: var(--q-Green) !important;
} */
 .cursor-pointer{
    margin: 10px;
 }
 label{
    font-size: 16px;
 }
.fontSize-icon{
  font-size : 24px;
  color:var(--q-Blue);
}
 .shape2-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
}
.shape3-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  left: 14px;
}
.shape4-img3{
  animation: shape-circle-img3 4s infinite 2s linear;
  position: absolute;
  left : 20px;
  top : 10px;
}

.shape6-img3{
  animation: shape-img3 4s infinite 2s linear;
  position: absolute;
  left : 40px;
  bottom: 10px;
}
@keyframes shape-img3 {
  0%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes shape-circle-img3 {
  0%{
    transform: translate(100px , -20px);
  }
  100%{
    transform: translateX(0px);
  }
}
</style>
  