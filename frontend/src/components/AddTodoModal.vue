<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click.self="$emit('close')">
    <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
      <h2 class="text-xl font-bold mb-4 text-[#1c1654]">Yeni Görev Ekle</h2>
      <input
        v-model="title"
        type="text"
        placeholder="Bir görev yazın..."
        class="w-full border px-4 py-2 rounded text-[#1c1654] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1cb8c4]"
        @keydown.enter="submit"
      />
      <div class="mt-4 flex justify-end gap-2">
        <button @click="$emit('close')" class="text-gray-500 hover:underline">İptal</button>
        <button
          @click="submit"
          class="bg-[#1cb8c4] text-white px-4 py-2 rounded hover:bg-[#18a1ae] transition"
        >
          Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['close', 'add'])
const title = ref('')

function submit() {
  if (title.value.trim() !== '') {
    emit('add', title.value.trim())
    title.value = ''
    emit('close')
  }
}
</script>
