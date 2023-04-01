<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const isDrawerVisible = ref(false)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-if="isDrawerVisible" v-model="isDrawerVisible">
      <v-list>
        <v-list-item title="Home Page" value="home"></v-list-item>

        <v-list-item title="To-Do List" value="list"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    
    <v-app-bar color="#42A5F5">
      <v-app-bar-nav-icon
        class="d-sm-none"
        color="white"
        @click="isDrawerVisible = !isDrawerVisible"
      />

      <div class="d-none d-sm-flex">
        <v-btn color="white" variant="text">
          Home Page
        </v-btn>
  
        <v-btn color="white" variant="text">
          To-Do List
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
