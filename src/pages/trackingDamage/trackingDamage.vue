<template>
    <q-card-section class="tracking-damage-container" style="max-width: 70rem; margin: auto; direction: rtl;">
      <div v-if="loading">
        <q-inner-loading
          :showing="true"
          style="background: rgba(255, 255, 255, 0.7); z-index: 2000;"
        >
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
      </div>
      <q-card-section>
        <div class="text-h6" style="direction: rtl;">پیگیری خسارت</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="findTracking()" class="q-gutter-md">
          <div class="row">
            <div
              v-if="showTrack"
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-margin"
            >
              <section class="row status-cont" v-if="trackingDamageModel.id">
                <div
                  :class="
                    'status' + (trackingDamageStatus >= 0 ? 'active' : '')
                  "
                >
                  <i class="material-icons">
                    check
                  </i>
                  در حال بررسی
                </div>
                <div
                  :class="
                    'line rejected' +
                    (trackingDamageStatus == 2 ? 'active' : '')
                  "
                  v-if="trackingDamageStatus == 2"
                ></div>
                <div
                  :class="
                    'status rejected' +
                    (trackingDamageStatus == 2 ? 'active' : '')
                  "
                  v-if="trackingDamageStatus == 2"
                >
                  <i class="material-icons">
                    close
                  </i>
                  رد شده
                </div>
                <div
                  :class="'line' + (trackingDamageStatus >= 1 ? 'active' : '')"
                  v-if="trackingDamageStatus != 2"
                ></div>
                <div
                  :class="
                    'status' + (trackingDamageStatus >= 1 ? 'active' : '')
                  "
                  v-if="trackingDamageStatus != 2"
                >
                  <i class="material-icons">
                    check
                  </i>
                  تایید شده
                </div>
                <div
                  :class="
                    'line' +
                    (trackingDamageStatus >= 1 && trackingDamageStatus != 2
                      ? 'active'
                      : '')
                  "
                ></div>
                <div
                  :class="
                    'status' +
                    (trackingDamageStatus >= 1 && trackingDamageStatus != 2
                      ? 'active'
                      : '')
                  "
                >
                  <i class="material-icons">
                    check
                  </i>
                  رسیدگی کارشناس
                </div>
                <div
                  :class="
                    'line rejected' +
                    (trackingDamageStatus == 4 ? 'active' : '')
                  "
                  v-if="trackingDamageStatus == 4"
                ></div>
                <div
                  :class="
                    'status rejected' +
                    (trackingDamageStatus == 4 ? 'active' : '')
                  "
                  v-if="trackingDamageStatus == 4"
                >
                  <i class="material-icons">
                    close
                  </i>
                  رد شده
                </div>
                <div
                  :class="'line' + (trackingDamageStatus >= 3 ? 'active' : '')"
                  v-if="trackingDamageStatus != 4"
                ></div>
                <div
                  :class="
                    'status' + (trackingDamageStatus >= 3 ? 'active' : '')
                  "
                  v-if="trackingDamageStatus != 4"
                >
                  <i class="material-icons">
                    check
                  </i>
                  تایید شده
                </div>
                <div
                  :class="
                    'line' +
                    (trackingDamageStatus >= 3 && trackingDamageStatus != 4
                      ? 'active'
                      : '')
                  "
                ></div>
                <div
                  :class="
                    'status' +
                    (trackingDamageStatus >= 3 && trackingDamageStatus != 4
                      ? 'active'
                      : '')
                  "
                >
                  <i class="material-icons">
                    check
                  </i>
                  ارسال به مالی
                </div>
                <div
                  :class="'line' + (trackingDamageStatus == 6 ? 'active' : '')"
                ></div>
                <div
                  :class="
                    'status' + (trackingDamageStatus == 6 ? 'active' : '')
                  "
                >
                  <i class="material-icons">
                    check
                  </i>
                  پرداخت شده
                </div>
              </section>
              <section
                class="row description"
                v-if="
                  activeTrackingDamageStatusIndex > -1 &&
                  trackingDamageModel.trackingDamageStatus[
                    activeTrackingDamageStatusIndex
                  ].description &&
                  trackingDamageModel.trackingDamageStatus[
                    activeTrackingDamageStatusIndex
                  ].description != ''
                "
              >
                <header>توضیح کارشناس:</header>
                <article>
                  <p>
                    {{
                      trackingDamageModel.trackingDamageStatus[
                        activeTrackingDamageStatusIndex
                      ].description
                    }}
                  </p>
                </article>
              </section>
            </div>

            <div
              v-if="!showTrack"
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 with-margin"
            >
              <q-input
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'کد رهگیری الزامی است',
                ]"
                color="teal"
                outlined
                v-model="myTrackingCode"
                label="کد رهگیری"
                class="label-right"
              >
              </q-input>
            </div>
            <div
              v-if="!showTrack"
              class="col-lg-12 col-md-12 col-sm-12 col-xs-12 flex justify-end"
            >
            <q-btn
                  color="primary"
                  label="پیگیری درخواست"
                  type="submit"
                />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card-section>
  </template>

  <script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "TrackingDamage",
    data(){
      return{
        trackingDamageModel: [],
        activeTrackingDamageStatusIndex:0,
        trackingDamageStatus:-1,
        showAcceptedForm:false,
        myTrackingCode: "",
        trackingIndex:0,
        loading:false,
        showTrack:false,
      }
    },
    methods:{
      async findTracking() {
         this.loading = true;
         try {
           var a = await PortalService.findTracking(this.myTrackingCode);
           this.trackingDamageModel = a.message[0];
           this.activeTrackingDamageStatusIndex =
             this.trackingDamageModel.trackingDamageStatus.length - 1;
           if (
             this.trackingDamageModel.id &&
             this.activeTrackingDamageStatusIndex > -1
           ) {
             this.trackingDamageStatus = this.trackingDamageModel.trackingDamageStatus[
               this.activeTrackingDamageStatusIndex
             ].trackingDamageStatus;
           }
           this.showTrack = true;
        } catch (err) {
          if(err.data.message){
            this.$q.notify({
            color: "red",
            textColor: "white",
            icon: "cloud_done",
            message: err.data.message,
          });
          }

        }
    this.loading = false;
  }
    }


  });
  </script>

<style lang="scss">
.tracking-damage-container{
  padding-top: 150px;
}
section.row {
  display: flex;
  @media (max-width: 910px) {
    flex-direction: column;
  }
  &.status-cont {
    margin: 32px 0;
    align-items: center;
    @media (max-width: 910px) {
      align-items: start;
    }
    .status {
      display: flex;
      align-items: center;
      color: #bdbdbd;
      flex: none;
      i {
        background: #bdbdbd;
        border-radius: 50%;
        height: 20px;
        line-height: 1.2;
        font-size: 18px;
        padding: 0 1px;
        color: white;
        margin-left: 2px;
        @media (max-width: 910px) {
          margin-left: 8px;
        }
      }
      &.active {
        color: #3b8bff;
        i {
          background: #3b8bff;
        }
        &.rejected {
          color: #e5273a;
          i {
            background: #e5273a;
          }
        }
      }
    }
    .line {
      width: 64px;
      height: 1px;
      margin: 0 4px;
      background: #bdbdbd;
      @media (max-width: 910px) {
        display: none;
      }
      &.active {
        background: #3b8bff;
        &.rejected {
          background: #e5273a;
        }
      }
    }
  }
  &.description {
    display: block;
    header {
      color: #757575;
    }
    article {
      margin-top: 6px;
      padding: 16px;
      background: #f5f7ff;
      border-radius: 4px;
      box-shadow: 1px 1px 3px rgba(6, 27, 72, 0.15);
      color: #212121;
    }
  }
}
</style>
