<template>
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete="$emit('delete', $event)" />
  </ul>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Todo } from '@/types/todo'

defineProps<{
  todos: Todo[]
}>()

defineEmits(['delete'])
</script>
