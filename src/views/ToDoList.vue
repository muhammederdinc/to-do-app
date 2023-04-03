<script setup>
import { ref } from 'vue';
// Stores
import { useTodoStore } from '@/stores/todo'
import { useGlobalNavigationDrawer } from '@/stores/globalNavigationDrawer'
// Components
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// Constants
import { TodoStatus } from '@/constants/index.js';

// Stores Instance
const todoStore = useTodoStore()

// v-data-table
const search = ref('')
const sortBy = ref([])
const headers = [
  { title: '', key: 'statusAction', sortable: false },
  { title: 'ID', key: 'id', sortable: false },
  { title: 'Title', key: 'title', sortable: false },
  { title: 'End Date', key: 'endDate' },
  { title: 'Status', key: 'state' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// Edit Task with Global Navigation Drawer
const navigationDrawerStore = useGlobalNavigationDrawer()

const navigationFormData = ref({
  title: '',
  endDate: '',
})

const openGlobalNavigationDrawer = (item) => {
  navigationDrawerStore.open()
  navigationFormData.value = { ...item }
}

const updateTask = () => {
  const params = {
    ...navigationFormData.value,
    endDate: new Intl.DateTimeFormat("en-US").format(new Date(navigationFormData.value.endDate))
   }

  todoStore.updateTodo(params.id, params)
  navigationDrawerStore.close()
}
</script>

<template>
  <div class="t-to-do-list">
    <v-data-table
      v-model:sort-by="sortBy"
      :headers="headers"
      :items="todoStore.items"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.statusAction="{ item }">
        <v-checkbox
          v-model="item.raw.state"
          color="success"
          :value="TodoStatus.COMPLETED"
          :false-value="TodoStatus.TODO"
          hide-details
        />
      </template>

      <template v-slot:top>
        <div class="t-to-do-list__table-header d-flex align-center pl-3">
          <h3>My To-do List </h3>

          <v-spacer />

          <v-responsive
            max-width="344"
          >
            <v-text-field
              v-model="search"
              variant="outlined"
              label="Search"
              class="pa-4"
              clearable
              density="compact"
            />
          </v-responsive>
        </div>
      </template>

      <template v-slot:item.actions="{ item }">
        <div class="d-flex">
          <v-btn
            icon="mdi-pencil"
            variant="outlined"
            size="x-small"
            color="blue"
            class="mr-2"
            @click="openGlobalNavigationDrawer(item.raw)"
          />
  
          <v-btn
            icon="mdi-delete"
            variant="outlined"
            size="x-small"
            color="red"
            @click="todoStore.deleteTodo(item.raw.id)"
          />
        </div>
      </template>
    </v-data-table>

    <Teleport to="#global-navigation-drawer">
        <div class="text-center mt-5">
          <h3>Edit Task</h3>

          <div class="px-4">
            <v-text-field
              v-model="navigationFormData.title"
              variant="outlined"
              label="Search"
              clearable
              density="compact"
            />
  
            <VueDatePicker
              v-model="navigationFormData.endDate"
              :enable-time-picker="false"
            />
          </div>

          <div class="mx-3 mt-8">
            <v-btn
              class="mb-3"
              variant="outlined"
              color="success"
              block
              @click="updateTask"
            >
              Update
            </v-btn>

            <v-btn
              variant="outlined"
              color="red"
              block
              @click="navigationDrawerStore.close()"
            >
              Close
            </v-btn>
          </div>
        </div>
      </Teleport>
  </div>
</template>

<style lang="scss">
.t-to-do-list {
  &__table-header {
    height: 80px;
    border: 1px solid #e0e0e0;
  }
}
</style>
