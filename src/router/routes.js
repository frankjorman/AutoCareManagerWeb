const routes = [
  {
    path: "/layout",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "Taller",
        component: () => import("pages/TallerMantenimiento.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/MecanicoMantenimiento.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/ClienteMantenimiento.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/VehiculoMantenimiento.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/ReparacionesMantenimiento.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/Facturas.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/InventarioPiezas.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/InformesEstadisticas.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("pages/LoginInicio.vue"),
  },
  {
    path: "/registrar",
    component: () => import("pages/RegisterForm.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
