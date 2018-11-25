<template>
  <div>
    <v-toolbar flat color="#424242">
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Поиск"
        single-line
        hide-details
        color="light-blue lighten-1"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2"
          >Добавить</v-btn
        >
        <v-card>
          <v-card-title> <span class="headline">Новый дом</span> </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-field
                    label="Адрес"
                    v-model="editedItem.name"
                    prepend-icon="place"
                    required
                    color="light-blue lighten-1"
                  />
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    label="Этажность"
                    v-model="editedItem.floorCount"
                    prepend-icon="place"
                    placeholder="Количество"
                    required
                    color="light-blue lighten-1"
                  />
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    label="Подъезды"
                    placeholder="Количество"
                    v-model="editedItem.porch"
                    prepend-icon="place"
                    required
                    color="light-blue lighten-1"
                  />
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-checkbox
                    label="Лифт"
                    v-model="editedItem.elevator"
                    required
                    color="light-blue lighten-1"
                  />
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    label="Площадь дома"
                    placeholder="кв. м."
                    v-model="editedItem.houseSquare"
                    prepend-icon="place"
                    required
                    color="light-blue lighten-1"
                  />
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    label="площадь дворовой территории"
                    placeholder="кв. м."
                    v-model="editedItem.nearSquare"
                    prepend-icon="place"
                    required
                    color="light-blue lighten-1"
                  />
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-select
                    v-model="editedItem.managementCompany"
                    :items="managementCompanyList"
                    box
                    item-text="name"
                    item-value="_id"
                    label="Управляющая компания"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close"
              >Отмена</v-btn
            >
            <v-btn color="blue darken-1" flat @click.native="save"
              >Сохранить</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="records"
      :search="search"
      class="resultTable-table"
    >
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <span slot="activator"> {{ props.header.text }} </span>
          <span> {{ props.header.text }} </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.floorCount }}</td>
        <td>{{ props.item.porch }}</td>
        <td>{{ props.item.elevator ? "да" : "нет" }}</td>
        <td>{{ props.item.houseSquare }}</td>
        <td>{{ props.item.nearSquare }}</td>
        <td>
          {{
            props.item.managementCompany && props.item.managementCompany.name
          }}
        </td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item);">
            edit
          </v-icon>
          <v-icon small @click="removeItem(props.item._id);"> delete </v-icon>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </div>
</template>
<script>
export default {
  props: ["records", "managementCompanyList"],
  name: "list",
  data() {
    return {
      dialog: false,
      editedIndex: -1,
      search: "",
      editedItem: {},
      defaultItem: {
        name: "",
        floorCount: 1,
        porch: 1,
        elevator: true,
        houseSquare: 1,
        nearSquare: 1,
        managementCompany: null
      },
      headers: [
        {
          text: "Адресс",
          align: "left",
          sortable: true,
          value: "name"
        },
        {
          text: "Этажность",
          value: "floorCount",
          align: "left"
        },
        {
          text: "Подъезды",
          value: "porch",
          align: "left"
        },
        {
          text: "Лифт",
          value: "elevator",
          align: "left"
        },
        {
          text: "Площадь дома",
          value: "houseSquare",
          align: "left"
        },
        {
          text: "Площадь дворовой территории",
          value: "nearSquare",
          align: "left"
        },
        {
          text: "Управляющая компания",
          value: "managementCompany",
          align: "left"
        },
        {
          text: "Actions",
          value: "name",
          sortable: false
        }
      ],
      save: () => {
        let house = this.editedItem;
        if (this.editedIndex > -1) {
          this.$emit("edit", house);
        } else {
          this.$emit("save", house);
        }
        this.close();
      },
      editItem(item) {
        this.editedIndex = this.records.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
      removeItem(id) {
        confirm("Точно удалить?") && this.$emit("remove", id);
      },
      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300);
      }
    };
  }
};
</script>

<style scoped>
.resultTable-table {
  text-align: left;
}
</style>
