<template>
  <q-page>
    <div class="row">
      <q-table
        color="secondary"
        :loading="loading"
        :rows="empleados"
        :columns="columns"
        class="col"
      />
    </div>
  </q-page>
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
      columns,
      loading,
      empleados,
    };
  },
});
</script>
