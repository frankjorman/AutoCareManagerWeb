const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    children: [
      {
        path: "Empleado",
        component: () => import("pages/EmpleadoMantenimiento.vue"),
      },
    ],
  },
  {
    path: "/layoutYoutube",
    component: () => import("layouts/YoutubeLayout.vue"),
    children: [
      { path: "login", component: () => import("pages/LoginInicio.vue") },
    ],
  },
  {
    path: "/layoutWhatsapp",
    component: () => import("layouts/WhatsappLayout.vue"),
    children: [
      { path: "login", component: () => import("pages/LoginInicio.vue") },
      { path: "wa", component: () => import("pages/WaEjemplo.vue") },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/LoginInicio.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
