<template>
  <div class="min-h-screen bg-[#1c1654] text-white px-4">
    <HeaderLogo />
    <AddTodoButton @open="showAddModal = true" />
    <AddTodoModal v-if="showAddModal" @close="showAddModal = false" @add="addTodo" />
    <TodoList :todos="todos" @delete="deleteTodo" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import AddTodoButton from '@/components/AddTodoButton.vue'
import AddTodoModal from '@/components/AddTodoModal.vue'
import TodoList from '@/components/TodoList.vue'
import { useTodos } from '@/composables/useTodos'

const { todos, fetchTodos, addTodo, deleteTodo } = useTodos()
const showAddModal = ref(false)

onMounted(() => {
  fetchTodos()
})
</script>
