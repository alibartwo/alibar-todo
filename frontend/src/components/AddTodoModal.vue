<template>
  <div
    class="fixed inset-0 bg-[#1c1654]/90 flex items-start justify-center pt-20 z-50"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md text-[#1c1654]">
      <h3 class="text-xl font-semibold mb-4">Yeni Görev Ekle</h3>

      <input
        v-model="title"
        type="text"
        placeholder="Görev başlığı..."
        class="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#1cb8c4]"
      />

      <div class="flex justify-end space-x-2">
        <button
          @click="$emit('close')"
          class="px-4 py-2 rounded bg-gray-200 text-[#1c1654] hover:bg-gray-300"
        >
          İptal
        </button>
        <button
          @click="submit"
          class="px-4 py-2 rounded bg-[#1cb8c4] text-white hover:bg-[#159aa8]"
        >
          Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('')
const emit = defineEmits(['add', 'close'])

function submit() {
  if (title.value.trim() === '') return
  emit('add', title.value.trim())
  title.value = ''
  emit('close')
}
</script>
