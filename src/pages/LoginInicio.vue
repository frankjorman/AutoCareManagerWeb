<template>
  <q-page>
    <q-page-container>
      <q-card class="q-pa-md">
        <q-form @submit.prevent="login">
          <q-input v-model="username" label="Username" />
          <q-input v-model="password" label="Password" type="password" />
          <q-btn type="submit" label="Login" class="q-mt-md" />
        </q-form>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Aquí puedes agregar la lógica para enviar el formulario de inicio de sesión
    },
  },
};
</script>
