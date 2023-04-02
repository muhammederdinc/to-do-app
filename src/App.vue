<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
// Components
import TDHeader from './components/TDHeader.vue'

const isDrawerVisible = ref(false)
const routingButtons = [
  {
    text: 'Home Page',
    value: 'home',
    path: '/'
  },
  {
    text: 'To-Do List',
    value: 'list',
    path: '/to-do-list'
  }
]
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="isDrawerVisible" v-model="isDrawerVisible">
      <v-list>
        <v-list-item
          v-for="(btn, index) in routingButtons"
          :key="index"
          :title="btn.text"
          :value="btn.value"
          :to="btn.path"
        />
      </v-list>
    </v-navigation-drawer>

    <TDHeader
      :routingButtons="routingButtons"
      @toggleDrawerVisibility="isDrawerVisible = !isDrawerVisible"
    />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
