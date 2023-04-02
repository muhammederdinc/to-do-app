<script setup>
import { useTodoStore } from '@/stores/todo'
import { ref } from 'vue';

const todoStore = useTodoStore()
const search = ref('')
const sortBy = ref([])
const headers = [
  { title: 'ID', key: 'id', sortable: false },
  { title: 'Title', key: 'title', sortable: false },
  { title: 'End Date', key: 'endDate' },
  { title: 'Status', key: 'state' },
]
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
    </v-data-table>
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