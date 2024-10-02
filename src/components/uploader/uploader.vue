<template>
  <div>
  <div style="display:none">
  {{counter}}
  </div>
  <q-field
    :rules="isRequire?[(val) => checkValidate(val)   ||   ' الزامی است' ]:''"
    v-model="model"
    borderless no-error-icon
  >
      <q-file style="width:100%" class="custom-uploader label-right" :loading="loading" standout v-model="model" :label="label" :accept="accept">
        <template v-slot:prepend>
          <q-avatar>
             <!-- <img v-if="isImageFile" :src=" image?image:defaultImage">
             <q-icon v-if="isDocumentFile" name="description" style="font-size:24px;"  />
             <q-icon v-if="isPdfFile" name="picture_as_pdf " style="font-size:24px;"  /> -->
              <q-icon   name="file_upload" style="font-size:24px;"  />
          </q-avatar>
        </template>
      </q-file>
    </q-field>
      <!-- <span class="uploader-error">{{uploaderError}}</span> -->
  </div>
</template>
 <script>
    import { defineComponent } from "vue";
    import services from "src/services/services";
    export default defineComponent({
        name: "UploaderComponent",
        data(){
            return{
              accept:'.jpg,.docx,.doc,.pdf,.gif,.png,.mp4,.jpeg,.avi,.xls,.xlsx,.zip',
              loading:false,
              counter:0,
              model:{

              },
              uploaderError:'',
              isDocumentFile:false,
              isPdfFile:false,
              isImageFile:true,
              isVedioFile:false,
            }
        },
        props: {
           getUrl: {
              type: Boolean,
              default: false
            },
           isRequire: {
              type: Boolean,
              default: false
            },
           value: {
              type: Number,
              default: 0
            },
           defaultImage: {
              type: String,
              default:""
            },
           label: {
              type: String,
              default:""
            },
           title: {
              type: String,
              default:""
            },
        },
        mounted() {

         },
         watch: {
         model() {
            this.dataChanged()
         }
       },
        methods:{
          async dataChanged()
            {
              this.loading=true;
              this.counter++;
              this.$emit('selectedData',this.model)
              try{
                var response = await services.upload(this.title,this.model);
                this.uploaderError='';
                this.image=response.data.message.fileUrl
                this.$emit('input', this.getUrl ? response.data.message.fileUrl:response.data.message.id)
                this.$emit('successUpload',response)
                this.$emit("uploaderError",false)
                this.checkFileType(response.data.message.fileName);
              }catch(err){
                console.log(err);
                this.loading=false;
                // if(error.data.message){
                //   this.uploaderError=error.data.message;
                //   this.$emit("uploaderError",true)
                // }else{
                //   this.uploaderError="خطا در بارگذاری اطلاعات";
                //   this.$emit("uploaderError",true)
                // }

              }
           this.loading=false;
           },
           checkValidate(value){
             if(value.__key){
               return true;
             }
           },
           checkFileType(data){
            if(data.indexOf(".pdf") > -1){
              this.isPdfFile=true;
              this.isDocumentFile=false;
              this.isImageFile=false;
              this.isVedioFile=false;
              this.counter++;
            }else if(data.indexOf(".docx")>-1||data.indexOf(".doc")>-1||data.indexOf(".xlsx")>-1||data.indexOf(".xls")>-1||data.indexOf(".zip")>-1){
              this.isPdfFile=false;
              this.isDocumentFile=true;
              this.isImageFile=false;
              this.isVedioFile=false;
              this.counter++;
            }else if(data.indexOf(".jpg")>-1||data.indexOf(".jpeg")>-1||data.indexOf(".png")>-1||data.indexOf(".gif")>-1){
              this.isPdfFile=false;
              this.isDocumentFile=false;
              this.isImageFile=true;
              this.isVedioFile=false;
              this.counter++;
            }
            else if(data.indexOf(".mp4")>-1||data.indexOf(".avi")>-1){
             this.isPdfFile=false;
             this.isDocumentFile=false;
             this.isImageFile=false;
             this.isVedioFile=true;
             this.counter++;
            }

          }
        }
    });
  </script>
  <style lang="scss">
   .custom-uploader{
     .q-field__label{
       font-size: 14px;
     }
   }
   .uploader-error{
       color:#f00;
       font-size: 12px;
     }
  </style>
