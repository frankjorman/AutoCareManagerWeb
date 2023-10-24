<template>
  <div class="window-height window-width row justify-center items-center">
    <div class="q-pa-md" style="max-width: 400px">
      <h2 style="color: blue">LOGIN</h2>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input outlined v-model="user" label="Usuario" />
        <q-input outlined v-model="pass" label="Contraseña" />

        <div class="row justify-center">
          <q-btn label="Enviar" type="input" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Axios } from "axios";
import axios from "src/boot/axios";

export default {
  setup() {
    return {
      text: ref(""),
      pass: ref(""),
    };
  },
  methods: {
    async IniciarSesion() {
      const response = await axios.get("", {
        user: this.user,
        pass: this.pass,
      });

      this.placeholders = response.data;
    },
  },
};
</script>
