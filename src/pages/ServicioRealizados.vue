<template>
  <div>
    <h5>Taller Mecanico</h5>
    <q-form @submit="register()">
      <q-date v-model="form.fecha" label="Fecha" class="q-mb-md" required />

      <q-select
        outlined
        emit-value
        map-options
        v-model="form.idVehiculo"
        :options="vehicles"
        label="Vehiculos"
        option-value="idVehiculo"
        option-label="marca"
        class="q-mb-md"
      />

      <q-select
        outlined
        emit-value
        map-options
        v-model="form.idCliente"
        :options="clients"
        label="Clientes"
        option-value="idCliente"
        option-label="nombre"
        class="q-mb-md"
      />

      <q-select
        outlined
        emit-value
        map-options
        v-model="form.idServicio"
        :options="services"
        label="Servicios"
        option-value="idServicios"
        option-label="nombre"
        class="q-mb-md"
      />

      <q-select
        outlined
        emit-value
        map-options
        v-model="form.idRepuesto"
        :options="parts"
        label="Repuestos"
        option-value="idRepuesto"
        option-label="descripcion"
        class="q-mb-md"
      />

      <q-btn label="Registrar" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        fecha: "",
        idVehiculo: "",
        idCliente: "",
        idServicio: "",
        idRepuesto: "",
      },
      vehicles: [],
      clients: [],
      services: [],
      parts: [],
    };
  },
  created() {
    this.getClients();
    this.getServices();
    this.getParts();
    this.getVehicles();
  },
  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    getClients() {
      axios.get("http://localhost:5116/api/Clientes").then((response) => {
        this.clients = response.data;
      });
    },
    getServices() {
      axios.get("http://localhost:5116/api/Servicios").then((response) => {
        this.services = response.data;
      });
    },
    getParts() {
      axios.get("http://localhost:5116/api/Repuesto").then((response) => {
        this.parts = response.data;
      });
    },
    getVehicles() {
      axios.get("http://localhost:5116/api/Vehiculos").then((response) => {
        this.vehicles = response.data;
      });
    },
    register() {
      this.form.fecha = this.formatDate(this.form.fecha);
      axios
        .post("http://localhost:5116/api/ServicioRealizados", this.form)
        .then(() => {
          console.log("llego");
        });
    },
  },
};
</script>
