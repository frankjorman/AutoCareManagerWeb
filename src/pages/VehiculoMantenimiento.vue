<template>
  <q-page>
    <div class="row">
      <q-btn
        label="Nuevo"
        color="primary"
        @click="openCreateModal()"
        icon="add"
      />
    </div>
    <div class="row q-mt-md">
      <q-table
        color="secondary"
        :loading="loading"
        :rows="clientes"
        :columns="columns"
        class="col"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="idCliente" :props="props">
              {{ props.row.idCliente }}
            </q-td>
            <q-td key="numDocumento" :props="props">
              {{ props.row.numDocumento }}
            </q-td>
            <q-td key="nombre" :props="props">
              {{ props.row.nombre }}
            </q-td>
            <q-td key="telefono" :props="props">
              {{ props.row.telefono }}
            </q-td>
            <q-td key="correo" :props="props">
              {{ props.row.correo }}
            </q-td>
            <q-td key="acciones" :props="props">
              <div style="display: inline-flex; align-items: center">
                <div
                  @click="openUpdateModal(props.row)"
                  style="cursor: pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style="width: 20px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div
                  @click="deleteEmploye(props.row.idCliente)"
                  style="cursor: pointer; margin-left: 5px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    style="width: 20px"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>

  <q-dialog v-model="showCreateModal" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Cliente</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 100vh" class="scroll">
        <q-input v-model="form.numDocumento" label="Documento" />
        <q-input v-model="form.nombre" label="Nombre" />
        <q-input v-model="form.telefono" label="Telefono" />

        <q-input v-model="form.correo" label="Correo" />
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn
          flat
          label="Accept"
          color="primary"
          @click="registrarCliente()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="showUpdateModal" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">cliente</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 100vh" class="scroll">
        <q-input v-model="form.numDocumento" label="Documento" />

        <q-input v-model="form.nombre" label="Nombre" />

        <q-input v-model="form.telefono" label="Telefono" />
        <q-input v-model="form.correo" label="Correo" />
      </q-card-section>
      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" @click="updateEmployee()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showCreateModal: false,
      showUpdateModal: false,
      loading: false,
      clientes: [],
      columns: [
        { name: "idCliente", label: "Id", field: "idCliente", align: "left" },
        {
          name: "numDocumento",
          label: "Documento",
          field: "Documento",
          align: "center",
        },
        { name: "nombre", label: "Nombre", field: "nombre", align: "center" },
        { name: "telefono", label: "Telefono", field: "telefono" },
        { name: "correo", label: "Correo", field: "correo" },
        {
          name: "acciones",
          label: "Acciones",
          field: "acciones",
          align: "center",
        },
      ],
      form: {
        id: "",
        numDocumento: "",
        nombre: "",
        telefono: "",
        correo: "",
      },
    };
  },

  created() {
    this.getEmployees();
  },
  methods: {
    openUpdateModal(employee) {
      this.form = employee;
      this.showUpdateModal = true;
    },
    updateEmployee() {
      axios
        .put("http://localhost:5116/api/clientes", this.form)
        .then((response) => {
          this.getEmployees();
        })
        .finally(() => {
          this.showUpdateModal = false;
        });
    },
    registrarCliente() {
      this.form.estado = true;
      axios
        .post("http://localhost:5116/api/clientes", this.form)
        .then((response) => {
          this.getEmployees();
        })
        .finally(() => {
          this.showCreateModal = false;
        });
    },
    openCreateModal() {
      this.showCreateModal = true;
    },
    getEmployees() {
      axios
        .get("http://localhost:5116/api/clientes")
        .then((response) => {
          this.clientes = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    deleteEmploye(idCliente) {
      axios
        .delete(`http://localhost:5116/api/clientes/${idCliente}`)
        .then(() => {
          this.getEmployees();
          alert("El cliente fue eliminado");
        });
    },
  },
};
</script>
