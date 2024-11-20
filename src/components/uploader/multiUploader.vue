<template>
  <div>
    <div style="display: none;">
      {{ counter }}
    </div>
    <q-dialog v-model="showUpload" @input="onCloseSubmit">
      <q-card style="direction: rtl;">
        <q-card-section>
          <div class="text-h6">بارگذاری مدارک</div>
        </q-card-section>
        <q-form @submit="upload()">
          <div class="row">
            <div
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pr-md q-pl-md"
            >
              <q-input
                class="label-right"
                :rules="[
                  (val) => (val !== null && val !== '') || 'عنوان الزامی است',
                ]"
                color="teal"
                outlined
                v-model="fileTitle"
                label="عنوان"
              >
              </q-input>
            </div>
            <div
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pr-md q-pl-md"
            >
              <!-- <q-file
                :accept="accept"
                  :rules="[
                    val => val   || 'فایل الزامی است',
                  ]"
                :loading="loading" standout v-model="model" :label="label" @input="datachanged">
                  <template v-slot:prepend>
                    <q-avatar>
                      <img :src="image?image:defaultImage">
                    </q-avatar>
                  </template>
                </q-file> -->

              <q-file
                :accept="accept"
                class="label-right"
                :rules="[(val) => val || 'فایل الزامی است']"
                standout
                v-model="model.file"
                :label="'بارگذاری فایل'"
              >
                <template v-slot:prepend>
                  <q-avatar>
                    <q-icon name="file_upload" style="font-size: 24px;" />
                  </q-avatar>
                </template>
              </q-file>
            </div>
            <div
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pr-md q-pl-md q-pb-md flex justify-end"
            >
              <q-btn
                v-if="loading"
                :loading="loading"
                disable
                color="primary"
                label="آپلود"
              />
              <q-btn v-else type="submit" color="primary" label="آپلود" />
            </div>
          </div>
        </q-form>
      </q-card>
    </q-dialog>

    {{ title }}

    <div class="row">
      <q-btn
        @click="showUpload = true"
        style="margin-top: 10px;"
        class="upload-btn"
        label="بارگذاری"
      />
    </div>
    <div class="row">
      <div
        v-for="(img, index) in imageData"
        :key="index"
        class="col-lg-4 col-md-4 col-sm-6 col-xs-12"
      >
        <q-img
          :key="index"
          transition="slide-right"
          :src="img.url"
          style="width: 150px;"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-center text-body2">
            {{ img.title }}
            <q-btn
              round
              size="xs"
              color="red"
              icon="close"
              @click="deleteImage(index)"
            />
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import services from "src/services/services";
export default defineComponent({
  name: "multiUploader",
  data() {
    return {
      accept: ".jpg,.docx,.doc,.pdf,.gif,.png,.mp4,.jpeg,.avi,.xls,.xlsx",
      fileTitle: "",
      showUpload: false,
      loading: false,
      counter: 0,
      model: {
        file: {},
      },
      uploadFile: {},
      imageData: [],
      image: "",
    };
  },
  props: {
    getUrl: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: 0,
    },
    //  image: {
    //     type: String,
    //     default:""
    //   },
    defaultImage: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  mounted() {},

  methods: {
    deleteImage(index) {
      this.imageData.splice(index, 1);
      this.$emit(
        "input",
        this.imageData.map((p) => {
          return { title: p["title"], id: p["id"] };
        })
      );
    },
    async upload() {
      this.counter++;
      this.loading = true;
      var response = await services.upload(this.fileTitle, this.model.file);
      if (response.data.isSuccess) {
        this.image = response.data.message.fileUrl;
        this.imageData.push({
          title: response.data.message.title,
          id: response.data.message.id,
          url: response.data.message.fileUrl,
        });
        this.$emit(
          "input",
          this.imageData.map((p) => {
            return { title: p.title, id: p.id };
          })
        );
        this.fileTitle = "";
        this.showUpload = false;
      }
      this.loading = false;
    },
  },
});
</script>
<style lang="scss">
.upload-btn {
  background-color: var(--q-themeColor);
  color: #fff;
}
</style>
