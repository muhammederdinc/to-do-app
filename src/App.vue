<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app id="inspire">
    <v-app-bar color="#42A5F5">
      <v-btn color="white" variant="text">
        Home Page
      </v-btn>

      <v-btn color="white" variant="text">
        To-Do List
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
