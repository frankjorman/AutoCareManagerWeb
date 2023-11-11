<template>
  <div>
    <q-table
      :data="clientes"
      :columns="columns"
      row-key="id"
      class="q-mt-md"
      :rows-per-page-options="[5, 10, 15]"
    >
      <template v-slot:top-right>
        <q-btn color="primary" label="Agregar" @click="showDialog = true" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="numeroDocumento" :props="props">{{
            props.row.numeroDocumento
          }}</q-td>
          <q-td key="nombre" :props="props">{{ props.row.nombre }}</q-td>
          <q-td key="telefono" :props="props">{{ props.row.telefono }}</q-td>
          <q-td key="correo" :props="props">{{ props.row.correo }}</q-td>
          <q-td key="actions" :props="props">
            <q-btn
              color="primary"
              icon="edit"
              @click="editCliente(props.row)"
            />
            <q-btn
              color="negative"
              icon="delete"
              @click="deleteCliente(props.row)"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <q-form @submit="saveCliente">
            <q-input v-model="cliente.id" label="ID" type="number" />
            <q-input
              v-model="cliente.numeroDocumento"
              label="Número de Documento"
            />
            <q-input v-model="cliente.nombre" label="Nombre" />
            <q-input v-model="cliente.telefono" label="Teléfono" />
            <q-input v-model="cliente.correo" label="Correo" />
            <q-card-actions align="right">
              <q-btn color="primary" label="Guardar" type="submit" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientes: [
        {
          id: 1,
          numeroDocumento: "123456789",
          nombre: "Juan Perez",
          telefono: "1234567890",
          correo: "juanperez@gmail.com",
        },
        {
          id: 2,
          numeroDocumento: "987654321",
          nombre: "Maria Rodriguez",
          telefono: "0987654321",
          correo: "mariarodriguez@gmail.com",
        },
      ],
      columns: [
        { name: "id", align: "left", label: "ID", field: "id", sortable: true },
        {
          name: "numeroDocumento",
          align: "left",
          label: "Número de Documento",
          field: "numeroDocumento",
          sortable: true,
        },
        {
          name: "nombre",
          align: "left",
          label: "Nombre",
          field: "nombre",
          sortable: true,
        },
        {
          name: "telefono",
          align: "left",
          label: "Teléfono",
          field: "telefono",
          sortable: true,
        },
        {
          name: "correo",
          align: "left",
          label: "Correo",
          field: "correo",
          sortable: true,
        },
        { name: "actions", align: "center", label: "Acciones" },
      ],
      pagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 5,
      },
      showDialog: false,
      cliente: {
        id: null,
        numeroDocumento: "",
        nombre: "",
        telefono: "",
        correo: "",
      },
    };
  },
  methods: {
    editCliente(cliente) {
      this.cliente = { ...cliente };
      this.showDialog = true;
    },
    deleteCliente(cliente) {
      const index = this.clientes.findIndex((c) => c.id === cliente.id);
      if (index !== -1) {
        this.clientes.splice(index, 1);
      }
    },
    saveCliente() {
      if (this.cliente.id) {
        const index = this.clientes.findIndex((c) => c.id === this.cliente.id);
        if (index !== -1) {
          this.clientes.splice(index, 1, this.cliente);
        }
      } else {
        this.cliente.id = this.clientes.length + 1;
        this.clientes.push(this.cliente);
      }
      this.showDialog = false;
      this.cliente = {
        id: null,
        numeroDocumento: "",
        nombre: "",
        telefono: "",
        correo: "",
      };
    },
  },
};
</script>
