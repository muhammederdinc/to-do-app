<script setup>
const showModal = true
</script>

<template>
  <v-dialog
    v-model="showModal"
    persistent
    width="600"
  >
    <v-card>
      <v-card-title class="mt-4 mx-2">
        Create a new To-Do
      </v-card-title>

      <v-card-text>
        Form
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="red"
        >
          Close
        </v-btn>

        <v-btn
          color="blue"
          variant="outlined"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
