<template>
  <div>
    <h5>Taller Mecanico</h5>
    <q-form @submit="submitForm">
      <q-input
        outlined
        v-model="form.name"
        label="Name"
        class="q-mb-md"
        required
      />
      <q-input
        outlined
        v-model="form.email"
        label="Email"
        type="email"
        class="q-mb-md"
        required
      />
      <q-input
        outlined
        v-model="form.phone"
        label="Phone"
        type="tel"
        class="q-mb-md"
        required
      />
      <q-input
        outlined
        v-model="form.address"
        label="Address"
        class="q-mb-md"
        required
      />

      <q-btn label="Guardar" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
    };
  },
  created() {
    this.getClients();
  },
  methods: {
    getClients() {
      axios
        .get("http://localhost:5116/api/Configuraciones")
        .then((response) => {
          response.data.map((item) => {
            if (item.codigo == "nombre") {
              this.form.name = item.descripcion;
            }

            if (item.codigo == "correo") {
              this.form.email = item.descripcion;
            }

            if (item.codigo == "direccion") {
              this.form.address = item.descripcion;
            }

            if (item.codigo == "telefono") {
              this.form.phone = item.descripcion;
            }
          });
        });
    },
    submitForm() {
      // Submit form data to backend API
      const formData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      };
      console.log(formData);
      // Reset form fields
      this.name = "";
      this.email = "";
      this.phone = "";
      this.address = "";
    },
  },
};
</script>
