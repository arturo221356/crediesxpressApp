const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "home",
      },
      {
        path: "credito/:reference",
        component: () => import("pages/IndexPage.vue"),
        props: true,
      },

      {
        path: "garantia",
        component: () => import("pages/GarantiaPage.vue"),
        props: true,
        name: "garantia",
      },

      {
        path: "terminos-condiciones",
        component: () => import("pages/TermsConditionsPage.vue"),
        props: true,
        name: "terms",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
