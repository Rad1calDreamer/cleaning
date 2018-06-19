<template>
  <v-data-table
    :headers="headers"
    :items="records"
    class="resultTable-table"
  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <span slot="activator">
          {{ props.header.text }}
        </span>
        <span>
          {{ props.header.text }}
        </span>
      </v-tooltip>
    </template>
    <template slot="items" slot-scope="props">
      <td>{{ props.item.wiperName }}</td>
      <td>{{ props.item.sum }}</td>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    props:['records'],
    name: 'SumTable',
    data() {
      return {
        headers: [
          {
            text: 'Дворник',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Сумма',
            value: 'sum',
            align: 'left',
          }
        ]
      };
    }
  };
</script>

<style scoped>
.resultTable-table{
  text-align: left;
}
</style>
