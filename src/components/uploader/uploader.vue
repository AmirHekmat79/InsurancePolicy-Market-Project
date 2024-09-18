<template>
    <div>
    <div style="display:none">
    {{counter}}
    </div>
        <q-file class="custom-uploader" :loading="loading" standout v-model="model" :label="label" @input="datachanged" :accept="accept">
          <template v-slot:append>
            <q-avatar>
               <img v-if="isImageFile" :src=" image?image:defaultImage">
               <q-icon v-if="isDocumentFile" name="description" style="font-size:24px;"  />
               <q-icon v-if="isPdfFile" name="picture_as_pdf " style="font-size:24px;"  />
            </q-avatar>
          </template>
        </q-file>
        <span class="uploader-error">{{uploaderError}}</span>
    </div>
  </template>
  <script>

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