<template>
  <li class="w-full max-w-xl mx-auto mt-4 flex items-start gap-3">
    <button
      @click="toggleComplete"
      title="Görev durumu değiştir"
      class="w-10 h-10 bg-[#ffffff] hover:bg-gray-200 rounded flex items-center justify-center transition"
    >
      <component :is="todo.completed ? IconCheck : IconUncheck" class="w-8 h-8 text-white" />
    </button>

    <div
      class="flex-1 px-4 py-3 border border-gray-200 rounded bg-white flex justify-between items-start hover:shadow transition"
    >
      <div class="flex-1">
        <div v-if="editing">
          <input
            v-model="editedTitle"
            @keydown.enter="submitEdit"
            @keydown.esc="cancelEdit"
            class="w-full border border-gray-300 rounded px-3 py-2 text-sm text-[#1c1654] focus:outline-none focus:ring-2 focus:ring-[#1cb8c4]"
          />
        </div>
        <div v-else>
          <p
            :class="[
              'text-base font-medium',
              todo.completed ? 'line-through text-gray-400' : 'text-[#1c1654]',
            ]"
          >
            {{ todo.title }}
          </p>
        </div>
        <p class="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <IconTime class="w-6 h-6" />
          {{ formatDate(todo.created_at) }}
        </p>
      </div>

      <div class="flex gap-0 mt-1">
        <button
          @click="editing ? cancelEdit() : editing = true"
          title="Düzenle"
          class="rounded hover:bg-blue-50 transition"
        >
          <IconEdit class="w-10 h-10 text-blue-500 hover:text-blue-600" />
        </button>
        <button
          @click="$emit('delete', todo.id)"
          title="Sil"
          class="rounded hover:bg-red-50 transition"
        >
          <IconDelete class="w-10 h-10 text-red-500 hover:text-red-600" />
        </button>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconCheck from './icons/IconCheck.vue'
import IconUncheck from './icons/IconUncheck.vue'
import IconEdit from './icons/IconEdit.vue'
import IconDelete from './icons/IconDelete.vue'
import IconTime from './icons/IconTime.vue'
import { useTodos } from '@/composables/useTodos'
import type { Todo } from '@/types/todo'

const props = defineProps<{ todo: Todo }>()
const { updateTodo } = useTodos()
const editing = ref(false)
const editedTitle = ref(props.todo.title)

const toggleComplete = async () => {
  await updateTodo(props.todo.id, { completed: !props.todo.completed })
}

const markComplete = async () => {
  await updateTodo(props.todo.id, { completed: true })
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const submitEdit = async () => {
  const newTitle = editedTitle.value.trim()
  if (newTitle && newTitle !== props.todo.title) {
    await updateTodo(props.todo.id, { title: newTitle })
  }
  editing.value = false
}

const cancelEdit = () => {
  editedTitle.value = props.todo.title
  editing.value = false
}
</script>
