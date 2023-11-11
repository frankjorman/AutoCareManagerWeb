<template>
  <div>
    <h1>Edit Taller Mecanico</h1>
    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="text" id="address" v-model="address" required />
      </div>
      <button type="submit">Submit</button>
    </form>
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
