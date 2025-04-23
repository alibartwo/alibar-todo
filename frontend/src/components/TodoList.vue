<template>
  <ul class="space-y-3">
    <TodoItem
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @delete="emit('delete', $event)"
      @update="emit('update', $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import TodoItem from './TodoItem.vue'

interface Todo {
  id: number
  title: string
  completed: boolean
  created_at: string
  updated_at: string
}

const props = defineProps<{ todos: Todo[] }>()
const emit = defineEmits(['delete'])
</script>
