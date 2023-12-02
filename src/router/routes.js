const routes = [
  {
    path: "/layout",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "Taller",
        component: () => import("pages/TallerInformacion.vue"),
      },
      {
        path: "Empleado",
        component: () => import("pages/MecanicoMantenimiento.vue"),
      },
      {
        path: "Cliente",
        component: () => import("pages/ClienteMantenimiento.vue"),
      },
      {
        path: "Serviciorealizados",
        component: () => import("pages/ServicioRealizados.vue"),
      },
      {
        path: "Reparaciones",
        component: () => import("pages/ReparacionesInf.vue"),
      },
      {
        path: "Factura",
        component: () => import("pages/FacturaPage.vue"),
      },
      {
        path: "Vehiculo",
        component: () => import("pages/VehiculoMantenimiento.vue"),
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
