<template>
  <li
    class="bg-white p-4 rounded shadow flex justify-between items-start gap-4"
    :class="editing ? 'ring-2 ring-[#1cb8c4] bg-gray-50' : ''"
  >
    <div class="flex-1">
      <template v-if="editing">
        <input
          v-model="editedTitle"
          class="w-full border border-gray-300 rounded px-2 py-1 text-sm text-[#1c1654]"
        />
      </template>
      <template v-else>
        <p class="text-base font-medium text-[#1c1654]">{{ todo.title }}</p>
        <p class="text-xs text-gray-500 mt-1">🕓 {{ formatDate(todo.created_at) }}</p>
      </template>
    </div>

    <div class="flex gap-2 items-center">
      <template v-if="editing">
        <button @click="saveEdit" class="text-sm text-[#1cb8c4] font-semibold hover:underline">
          Kaydet
        </button>
      </template>
      <template v-else>
        <button @click="editing = true" class="text-[#1c1654] hover:text-[#1cb8c4]">✏️</button>
      </template>
      <button @click="$emit('delete', todo.id)" class="text-red-500 hover:text-red-700 text-xl">
        &times;
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  id: number
  title: string
  completed: boolean
  created_at: string
  updated_at: string
}

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits(['delete', 'update'])

const editing = ref(false)
const editedTitle = ref(props.todo.title)

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function saveEdit() {
  if (editedTitle.value.trim() === '') return
  emit('update', {
    id: props.todo.id,
    title: editedTitle.value.trim(),
  })
  editing.value = false
}
</script>
