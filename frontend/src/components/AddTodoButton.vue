<template>
  <div class="w-full max-w-xl mx-auto mt-6">
    <div class="flex justify-end">
      <button
        @click="$emit('open')"
        class="w-12 h-12 bg-[#1cb8c4] hover:bg-[#18a1ae] rounded flex items-center justify-center transition"
      >
        <IconAdd class="w-12 h-12 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconAdd from './icons/IconAdd.vue'
defineEmits(['open'])
</script>
