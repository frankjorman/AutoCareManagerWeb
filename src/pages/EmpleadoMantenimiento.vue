<template>
  <table>
    <thead>
      <tr>
        <th>Employee Name</th>
        <th>Employee ID</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, index) in employees" :key="index">
        <td>{{ employee.name }}</td>
        <td>{{ employee.id }}</td>
        <td>{{ employee.department }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        { name: "John Doe", id: 1234, department: "Sales" },
        { name: "Jane Smith", id: 5678, department: "Marketing" },
        { name: "Bob Johnson", id: 9012, department: "Finance" },
      ],
    };
  },
};
</script>
