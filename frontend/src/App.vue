<template>
  <div class="min-h-screen bg-[#1c1654] text-white px-4">
    <HeaderLogo />

    <div class="relative w-full max-w-xl mx-auto mt-10">
      <AddTodoButton class="absolute -top-6 right-0" @open="showAddModal = true" />
      <AddTodoModal v-if="showAddModal" @close="showAddModal = false" @add="addTodo" />
      <TodoList :todos="todos" @delete="deleteTodo" @update="updateTodo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from './components/TodoList.vue'
import HeaderLogo from './components/HeaderLogo.vue'
import AddTodoButton from './components/AddTodoButton.vue'
import AddTodoModal from './components/AddTodoModal.vue'

import axios from 'axios'
import { ref, onMounted } from 'vue'

interface Todo {
  id: number
  title: string
  completed: boolean
  created_at: string
  updated_at: string
}

const showAddModal = ref(false)
const todos = ref<Todo[]>([])
async function addTodo(title: string) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/todos', {
      title: title,
    })

    todos.value.unshift(response.data)
  } catch (error) {
    console.error('Görev eklenemedi:', error)
  }
}

async function deleteTodo(id: number) {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/todos/${id}`)
    todos.value = todos.value.filter((todo) => todo.id !== id)
  } catch (error) {
    console.error('Görev silinemedi:', error)
  }
}

async function updateTodo(payload: { id: number; title: string }) {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/api/todos/${payload.id}`, {
      title: payload.title,
    })

    const index = todos.value.findIndex((todo) => todo.id === payload.id)
    if (index !== -1) {
      todos.value[index] = response.data
    }
  } catch (error) {
    console.error('Görev güncellenemedi:', error)
  }
}

onMounted(async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/todos')
    todos.value = res.data
  } catch (error) {
    console.error('Görevler alınamadı:', error)
  }
})
</script>
