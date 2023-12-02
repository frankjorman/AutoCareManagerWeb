<template>
  <div>
    <h5>Facturas</h5>

    <div style="display: inline-flex; width: 100%">
      <div style="width: 50%">
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

        <q-date v-model="form.fecha" label="Fecha" class="q-mb-md" required />

        <q-input
          v-model="form.montoTotal"
          required
          outlined
          label="Monto Total"
        />

        <q-separator />

        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" @click="register()" />
      </div>

      <div style="width: 50; padding: 20px">
        <div v-for="(service, index) in services" :key="index">
          <q-btn
            flat
            label="add - "
            color="primary"
            @click="addService(service.idServicioRealizado)"
          >
            {{ service.idServicioRealizado }}
          </q-btn>
        </div>

        <div>
          <div>Servicios:</div>
          <div>
            <div v-for="(service, index) in this.form.services" :key="index">
              {{ service.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        fecha: "",
        idCliente: "",
        montoTotal: "",
        services: [],
      },
      clients: [],
      services: [],
      showCreateModal: false,
    };
  },
  created() {
    this.getClients();
    this.getServices();
  },
  methods: {
    addService(id, name = "item") {
      this.form.services.push({ id: id, name: name + id });
    },
    getServices() {
      axios
        .get("http://localhost:5116/api/ServicioRealizados")
        .then((response) => {
          this.services = response.data;
        });
    },
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
    register() {
      this.form.fecha = this.formatDate(this.form.fecha);
      axios
        .post("http://localhost:5116/api/Factura", this.form)
        .then((response) => {
          console.log(response.data.id);
          this.updateServices(response.data.id);
        });
    },
    updateServices(invoiceId) {
      let services = [];
      this.form.services.map((service) => {
        services.push({
          idServicioRealizado: service.id,
          idFactura: invoiceId,
        });
      });
      axios
        .put("http://localhost:5116/api/ServicioRealizados", services)
        .then(() => {
          console.log("llego");
        });
    },
    openCreateModal() {
      this.showCreateModal = true;
    },
  },
};
</script>
