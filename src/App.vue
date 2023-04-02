<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

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
    
    <v-app-bar class="px-2" color="#42A5F5">
      <v-app-bar-nav-icon
        class="d-sm-none pa-0 ma-0"
        color="white"
        @click="isDrawerVisible = !isDrawerVisible"
      />

      <div class="d-none d-sm-flex">
        <v-btn
          v-for="(btn, index) in routingButtons"
          :key="index"
          color="white"
          variant="text"
          :to="btn.path"
        >
          {{ btn.text }}
        </v-btn>
      </div>

      <v-spacer />

      <v-btn class="d-none d-sm-flex" color="white" variant="outlined">
        <v-icon class="mr-1">mdi-plus</v-icon>

        Add To-Do
      </v-btn>

      <v-btn
        class="d-sm-none"
        size="small"
        variant="outlined"
        color="white"
        icon="mdi-plus"
      />
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
