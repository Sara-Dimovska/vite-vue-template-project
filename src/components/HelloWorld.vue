<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  

  <div class="d-flex justify-center">
    <v-card width="300px">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">Title</v-card-title>
      <v-card-text>
        Body text
      </v-card-text>
    </v-card>
  </div>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
