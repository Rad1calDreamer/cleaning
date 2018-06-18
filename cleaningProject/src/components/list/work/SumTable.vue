<template>
  <v-data-table
    :headers="headers"
    :items="records"
    class="elevation-1"
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
            value: 'sum'
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
