<template>
  <div>
    <h5>Taller Mecanico</h5>
    <q-form @submit="submitForm">
      <q-input outlined v-model="name" label="Name" class="q-mb-md" required />
      <q-input
        outlined
        v-model="email"
        label="Email"
        type="email"
        class="q-mb-md"
        required
      />
      <q-input
        outlined
        v-model="phone"
        label="Phone"
        type="tel"
        class="q-mb-md"
        required
      />
      <q-input
        outlined
        v-model="address"
        label="Address"
        class="q-mb-md"
        required
      />

      <q-btn label="Guardar" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      address: "",
    };
  },
  methods: {
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
