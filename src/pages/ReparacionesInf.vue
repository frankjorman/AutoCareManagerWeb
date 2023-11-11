<template>
  <q-page>
    <q-table
      :data="reparaciones"
      :columns="columns"
      row-key="id"
      class="q-mt-md"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          label="Crear Reparación"
          @click="showDialog = true"
        />
      </template>
    </q-table>
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <q-form @submit="crearReparacion">
            <q-input v-model="nuevaReparacion.id" label="ID" />
            <q-input v-model="nuevaReparacion.fecha" label="Fecha" />
            <q-input v-model="nuevaReparacion.idVehiculo" label="ID Vehículo" />
            <q-input v-model="nuevaReparacion.idCliente" label="ID Cliente" />
            <q-input v-model="nuevaReparacion.servicio" label="Servicio" />
            <q-input v-model="nuevaReparacion.codigo" label="Código" />
            <q-card-actions>
              <q-btn color="primary" label="Crear" type="submit" />
              <q-btn
                color="negative"
                label="Cancelar"
                @click="showDialog = false"
              />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      reparaciones: [
        {
          id: 1,
          fecha: "2021-10-01",
          idVehiculo: 1,
          idCliente: 1,
          servicio: "Cambio de aceite",
          codigo: "CA001",
        },
        {
          id: 2,
          fecha: "2021-10-02",
          idVehiculo: 2,
          idCliente: 2,
          servicio: "Cambio de frenos",
          codigo: "CF001",
        },
        {
          id: 3,
          fecha: "2021-10-03",
          idVehiculo: 3,
          idCliente: 3,
          servicio: "Cambio de llantas",
          codigo: "CL001",
        },
      ],
      columns: [
        { name: "id", align: "left", label: "ID", field: "id", sortable: true },
        {
          name: "fecha",
          align: "left",
          label: "Fecha",
          field: "fecha",
          sortable: true,
        },
        {
          name: "idVehiculo",
          align: "left",
          label: "ID Vehículo",
          field: "idVehiculo",
          sortable: true,
        },
        {
          name: "idCliente",
          align: "left",
          label: "ID Cliente",
          field: "idCliente",
          sortable: true,
        },
        {
          name: "servicio",
          align: "left",
          label: "Servicio",
          field: "servicio",
          sortable: true,
        },
        {
          name: "codigo",
          align: "left",
          label: "Código",
          field: "codigo",
          sortable: true,
        },
        { name: "acciones", align: "left", label: "Acciones" },
      ],
      nuevaReparacion: {
        id: "",
        fecha: "",
        idVehiculo: "",
        idCliente: "",
        servicio: "",
        codigo: "",
      },
      showDialog: false,
    };
  },
  methods: {
    crearReparacion() {
      this.reparaciones.push(this.nuevaReparacion);
      this.nuevaReparacion = {
        id: "",
        fecha: "",
        idVehiculo: "",
        idCliente: "",
        servicio: "",
        codigo: "",
      };
      this.showDialog = false;
    },
  },
};
</script>
