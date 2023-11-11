<template>
  <q-page>
    <div class="row">
      <q-btn label="Nuevo" color="primary" @click="fixed = true" icon="add" />
    </div>
    <div class="row q-mt-md">
      <q-table
        color="secondary"
        :loading="loading"
        :rows="empleados"
        :columns="columns"
        class="col"
      />
    </div>
  </q-page>

  <q-dialog v-model="fixed">
    <q-card>
      <q-card-section>
        <div class="text-h6">Empleado</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll"> </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const loading = ref(true);
    const empleados = ref([]);

    const columns = [
      { name: "idEmpleado", label: "Id", field: "idEmpleado", align: "left" },
      { name: "nombre", label: "Nombre", field: "nombre", align: "center" },
      { name: "apellido", label: "Apellido", field: "apellido" },
      { name: "estado", label: "Estado", field: "estado" },
    ];

    axios
      .get("https://localhost:44341/api/Empleados")
      .then((response) => {
        empleados.value = response.data;
        console.log(response.data);
      })
      .finally(() => {
        loading.value = false;
      });

    return {
      //table
      columns,
      loading,
      empleados,
      //dialog
      basic: ref(false),
      fixed: ref(false),
    };
  },
});
</script>
