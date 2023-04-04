<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
// Components
import THeader from './components/THeader.vue'
import TFooter from './components/TFooter.vue'
import TCreateTodoModal from './components/TCreateTodoModal/TCreateTodoModal.vue'
// Stores
import { useGlobalNavigationDrawer } from '@/stores/globalNavigationDrawer'
import { useSnackbarStore } from '@/stores/snackbar'
// Composables
import { useCreateTodoWithModal } from '@/composables/createTodoWithModal'
// Constants
import { MenuItems } from '@/constants/index.js';

const navigationDrawerStore = useGlobalNavigationDrawer()
const { snackbar } = useSnackbarStore()
const { isVisible: isModalVisible, createTodo } = useCreateTodoWithModal()
const isDrawerVisible = ref(false)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="isDrawerVisible" v-model="isDrawerVisible">
      <v-list>
        <v-list-item
          v-for="(btn, index) in MenuItems"
          :key="index"
          :title="btn.text"
          :value="btn.value"
          :to="btn.path"
        />
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-show="navigationDrawerStore.isVisible"
      v-model="navigationDrawerStore.isVisible"
      location="right"
      width="300"
    >
      <div id="global-navigation-drawer" />
    </v-navigation-drawer>

    <THeader
      :routingButtons="MenuItems"
      @toggleDrawerVisibility="isDrawerVisible = !isDrawerVisible"
      @showCreateTodoModal="isModalVisible = true"
    />

    <v-main class="ma-5">
      <RouterView />
    </v-main>

    <TFooter />

    <TCreateTodoModal
      v-if="isModalVisible"
      @submit="createTodo"
      @close="isModalVisible = false"
    />

    <v-snackbar
      v-model="snackbar.isVisible"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-app>
</template>
