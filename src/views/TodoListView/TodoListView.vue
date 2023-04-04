<script setup>
import TEditTodoTeleport from '@/components/TEditTodoTeleport.vue'
import { useTodoList } from './composables/todoList'

const {
  search,
  sortBy,
  todoList,
  deleteTodo,
  updateTask,
  TodoStatus,
  searchTodo,
  filterTodo,
  filterStatus,
  navigationFormData,
  ToDoListTableHeaders,
  closeNavigationDrawer,
  openGlobalNavigationDrawer
} = useTodoList()
</script>

<template>
  <div class="t-to-do-list">
    <div class="d-none d-sm-flex">
      <v-data-table
        v-model:sort-by="sortBy"
        :headers="ToDoListTableHeaders"
        :items="todoList"
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
  
        <template v-slot:item.title="{ item }">
          <router-link :to="{ name: 'todoDetail', params: { id: item.raw.id }}">
            <span v-if="item.raw.state === TodoStatus.COMPLETED" class="text-decoration-line-through">
              {{ item.title }}
            </span>
            
            <span v-else>
              {{ item.title }}
            </span>
          </router-link>
        </template>
  
        <template v-slot:item.endDate="{ item }">
          <span
            v-if="item.raw.state === TodoStatus.COMPLETED"
            class="text-decoration-line-through"
          >
            {{ new Intl.DateTimeFormat("en-US").format(new Date(item.raw.endDate)) }}
          </span>
  
          <span v-else>
            {{ new Intl.DateTimeFormat("en-US").format(new Date(item.raw.endDate)) }}
          </span>
        </template>
  
        <template v-slot:top>
          <div class="t-to-do-list__table-header d-flex align-center pl-3">
            <h3>My To-do List </h3>

            <v-spacer />

            <div class="d-flex">
              <v-switch
                v-model="filterStatus"
                color="success"
                hide-details
                true-value="completed"
                false-value=""
                label="Completed Todo"
                @change="filterTodo"
              />
              
              <v-responsive
                width="300"
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
              @click="deleteTodo(item.raw.id)"
            />
          </div>
        </template>
      </v-data-table>
    </div>

    <div class="d-sm-none">
      <v-text-field label="Search" variant="outlined" @input="searchTodo" />

      <v-switch
        v-model="filterStatus"
        color="success"
        hide-details
        true-value="completed"
        false-value=""
        label="Completed Todo"
        @change="filterTodo"
      />

      <v-card
        v-for="todo in todoList"
        :key="todo.id"
        class="mt-5"
      >
        <v-card-title>
          <router-link
            class="text-decoration-none"
            :to="{ name: 'todoDetail',
            params: { id: todo.id }}"
          >
            {{ todo.title }}
          </router-link>
        </v-card-title>

        <v-card-text class="d-flex flex-column">
          <span>
            <v-icon class="mr-1" color="blue">
              mdi-clock
            </v-icon>

            <span :class="todo.state === TodoStatus.COMPLETED ? 'text-decoration-line-through' : ''">
              {{ new Intl.DateTimeFormat("en-US").format(new Date(todo.endDate)) }}
            </span>

          </span>

          <span class="mt-2">
            <v-icon class="mr-1" color="blue">
              {{ todo.state === TodoStatus.COMPLETED ? 'mdi-check' : 'mdi-progress-clock' }}
            </v-icon>

            {{ todo.state }}
          </span>
        </v-card-text>

        <v-card-actions>
          <v-switch
            v-model="todo.state"
            color="success"
            :value="TodoStatus.COMPLETED"
            :false-value="TodoStatus.TODO"
            hide-details
          />

          <v-spacer />

          <v-btn
            variant="outlined"
            size="small"
            color="blue"
            class="mr-2"
            @click="openGlobalNavigationDrawer(todo)"
          >
            <v-icon>
              mdi-pencil
            </v-icon>

            Edit
          </v-btn>

          <v-btn
            variant="outlined"
            size="small"
            color="red"
            @click="deleteTodo(todo.id)"
          >
            <v-icon>
              mdi-delete
            </v-icon>

            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <TEditTodoTeleport
      :initial-form-data="navigationFormData"
      @submit="updateTask"
      @close="closeNavigationDrawer"
    />
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
