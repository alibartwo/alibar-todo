import {ref} from 'vue';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import type { Todo } from '@/types/todo'


const todos = ref<Todo[]>([]);

const fetchTodos = async () => {
    try {
        const res = await axios.get(`${API_BASE_URL}/todos/`);
        todos.value = res.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

const addTodo = async (title: string) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/todos/`, {
            title,
            completed: false,
        });
        todos.value.unshift(res.data);
    } catch (error) {
        console.error('Error adding todo:', error);
    }
};

const deleteTodo = async (id: number) => {
    try {
        await axios.delete(`${API_BASE_URL}/todos/${id}/`);
        todos.value = todos.value.filter(todo => todo.id !== id);
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
};

const updateTodo = async (id: number, payload: Partial<Omit<Todo, 'id'>>) => {
    try {
        const res = await axios.patch(`${API_BASE_URL}/todos/${id}/`, payload);
        const index = todos.value.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos.value[index] = res.data;
        }
    } catch (error) {
        console.error('Error updating todo:', error);
    }
};

export function useTodos() {
    return {
        todos,
        fetchTodos,
        addTodo,
        deleteTodo,
        updateTodo,
    };
}