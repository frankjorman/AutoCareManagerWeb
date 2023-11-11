<template>
  <q-page>
    <q-table :data="vehiculos" :columns="columns" row-key="id" class="q-mt-md">
      <template v-slot:top>
        <q-btn color="primary" @click="showDialog = true"
          >Agregar vehículo</q-btn
        >
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id">{{ props.row.id }}</q-td>
          <q-td key="marca">{{ props.row.marca }}</q-td>
          <q-td key="modelo">{{ props.row.modelo }}</q-td>
          <q-td key="año">{{ props.row.año }}</q-td>
          <q-td key="placa">{{ props.row.placa }}</q-td>
          <q-td key="acciones">
            <q-btn color="primary" @click="editVehiculo(props.row)"
              >Editar</q-btn
            >
            <q-btn color="negative" @click="deleteVehiculo(props.row)"
              >Eliminar</q-btn
            >
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input v-model="form.id" label="ID" />
            <q-input v-model="form.marca" label="Marca" />
            <q-input v-model="form.modelo" label="Modelo" />
            <q-input v-model="form.año" label="Año" />
            <q-input v-model="form.placa" label="Placa" />
            <q-card-actions align="right">
              <q-btn color="primary" type="submit" label="Guardar" />
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
      vehiculos: [
        {
          id: 1,
          marca: "Toyota",
          modelo: "Corolla",
          año: 2020,
          placa: "ABC123",
        },
        { id: 2, marca: "Honda", modelo: "Civic", año: 2019, placa: "DEF456" },
        { id: 3, marca: "Ford", modelo: "Mustang", año: 2021, placa: "GHI789" },
      ],
      columns: [
        { name: "id", align: "left", label: "ID", field: "id", sortable: true },
        {
          name: "marca",
          align: "left",
          label: "Marca",
          field: "marca",
          sortable: true,
        },
        {
          name: "modelo",
          align: "left",
          label: "Modelo",
          field: "modelo",
          sortable: true,
        },
        {
          name: "año",
          align: "left",
          label: "Año",
          field: "año",
          sortable: true,
        },
        {
          name: "placa",
          align: "left",
          label: "Placa",
          field: "placa",
          sortable: true,
        },
        { name: "acciones", align: "center", label: "Acciones" },
      ],
      form: {
        id: null,
        marca: "",
        modelo: "",
        año: null,
        placa: "",
      },
      showDialog: false,
    };
  },
  methods: {
    editVehiculo(vehiculo) {
      this.form = { ...vehiculo };
      this.showDialog = true;
    },
    deleteVehiculo(vehiculo) {
      const index = this.vehiculos.indexOf(vehiculo);
      this.vehiculos.splice(index, 1);
    },
    submitForm() {
      if (this.form.id) {
        const index = this.vehiculos.findIndex((v) => v.id === this.form.id);
        this.vehiculos.splice(index, 1, this.form);
      } else {
        this.form.id = this.vehiculos.length + 1;
        this.vehiculos.push(this.form);
      }
      this.form = {
        id: null,
        marca: "",
        modelo: "",
        año: null,
        placa: "",
      };
      this.showDialog = false;
    },
  },
};
</script>
