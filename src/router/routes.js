
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/mainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/home/index.vue') },
      { path: '/AboutUs', component: () => import('src/pages/aboutUs/aboutUs.vue') },
      { path: '/ContactUs', component: () => import('src/pages/contactUs/contactUs.vue') },
      {
        path: 'InsuranceMagazine',
        component: () => import('src/pages/insuranceMagazine/insuranceMagazine.vue'),
      },
      {
        path: 'InsuranceMagazine/blog/:blogId',
        component: () => import('src/pages/blogDetails/blogDetails.vue'),
        props: true
      } ,
      // {
      //   path: 'TrackingInsurance',
      //   component: () => import('src/pages/trackingInsurance/trackingInsurance.vue'),
      // },
      {
        path: 'HomeBlogDetails',
        component: () => import('src/pages/homeBlogDetails/homeBlogDetails.vue'),
      },
      {
        path: 'TrackingDamage',
        component: () => import('src/pages/trackingDamage/trackingDamage.vue'),
      },
      {
        path: 'SubmitDamage',
        component: () => import('src/pages/submitDamage/submitDamage.vue'),
      },
      {
        path: 'marketerRegistration',
        component: () => import('src/pages/marketerRegistration/marketerRegistration.vue'),
      },
      {
        path: 'commonFaq',
        component: () => import('src/pages/faq/commonFaq.vue'),
      },
      {
        path: 'rulesAndObligations',
        component: () => import('src/pages/rule/rulesAndObligations.vue'),
      },
      {
        path: 'ourService',
        component: () => import('src/pages/ourService/ourService.vue'),
      },
      {
        path: 'registerComplaint',
        component: () => import('src/pages/registerComplaint/registerComplaint.vue'),
      },
      {
        path: 'otherJobsRegisteration',
        component: () => import('src/pages/otherJobsRegisteration/otherJobsRegisteration.vue'),
      },
      {
        path: 'agentRegisteration',
        component: () => import('src/pages/agentRegisteration/agentRegisteration.vue'),
      },
    ]
  },
 {
  
    path: '/LoginPage',
    component: () => import('src/pages/loginPage/loginPage.vue'),
  
 },
 {
  
    path: '/RegisterPage',
    component: () => import('src/pages/registerPage/registerPage.vue'),
  
 }
  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // }
]

export default routes
