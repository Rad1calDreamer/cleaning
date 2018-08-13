<template>
  <div>
    <v-toolbar flat color="white">
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Заголовок</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-text-field label="Адрес"
                              v-model="editedItem.name"
                              prepend-icon="place"
                              required
                              color="light-blue lighten-1">
                </v-text-field>
                <v-text-field label="Этажность"
                              v-model="editedItem.floorCount"
                              prepend-icon="place"
                              required
                              color="light-blue lighten-1">
                </v-text-field>
                <v-text-field label="Подъезды"
                              v-model="editedItem.porch"
                              prepend-icon="place"
                              required
                              color="light-blue lighten-1">
                </v-text-field>
                <v-checkbox
                  label="Лифт"
                  v-model="editedItem.elevator"
                  required
                  color="light-blue lighten-1"
                ></v-checkbox>
                <v-text-field label="Площадь дома"
                              v-model="editedItem.houseSquare"
                              prepend-icon="place"
                              required
                              color="light-blue lighten-1">
                </v-text-field>
                <v-text-field label="площадь дворовой территории"
                              v-model="editedItem.nearSquare"
                              prepend-icon="place"
                              required
                              color="light-blue lighten-1">
                </v-text-field>

                <!--<v-select label="Управляющая компания"-->
                <!--color="light-blue lighten-1"-->
                <!--v-model="managementCompany"-->
                <!--prepend-icon="work"-->
                <!--:items="managementCompanyList"-->
                <!--item-text="name"-->
                <!--item-value="_id"-->
                <!--single-line>-->
                <!--</v-select>-->
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
            <!--<v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

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
      <template slot="items" slot-scope="props" @click.native="alert(props.item)">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.floorCount }}</td>
        <td>{{ props.item.porch }}</td>
        <td>{{ props.item.elevator }}</td>
        <td>{{ props.item.houseSquare }}</td>
        <td>{{ props.item.nearSquare }}</td>
        <td>{{ props.item.managementCompany.name}}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    props: ['records'],
    name: 'list',
    data() {
      return {
        dialog: false,
        editedIndex: -1,
        editedItem: {
          name: '',
          floorCount: 1,
          porch: 1,
          elevator: true,
          houseSquare: 1,
          nearSquare: 1,
          managementCompany: null
        },
        defaultItem: {
          name: '',
          floorCount: 1,
          porch: 1,
          elevator: true,
          houseSquare: 1,
          nearSquare: 1,
          managementCompany: null
        },
        headers: [
          {
            text: 'Адресс',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {
            text: 'Этажность',
            value: 'floorCount',
            align: 'left'
          },
          {
            text: 'Подъезды',
            value: 'porch',
            align: 'left'
          },
          {
            text: 'Лифт',
            value: 'elevator',
            align: 'left'
          },
          {
            text: 'Площадь дома',
            value: 'houseSquare',
            align: 'left'
          },
          {
            text: 'Площадь дворовой территории',
            value: 'nearSquare',
            align: 'left'
          },
          {
            text: 'Управляющая компания',
            value: 'managementCompany',
            align: 'left'
          },
          {
            text: 'Actions',
            value: 'name',
            sortable: false
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .resultTable-table {
    text-align: left;
  }
</style>
