import {ref} from 'vue';
import axios from 'axios';
import type { Todo } from '@/types/todo'


const todos = ref<Todo[]>([]);

const fetchTodos = async () => {
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/todos/');
        todos.value = res.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
};

const addTodo = async (title: string) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/todos/', {
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
        await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`);
        todos.value = todos.value.filter(todo => todo.id !== id);
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
};

const updateTodo = async (id: number, payload: Partial<Omit<Todo, 'id'>>) => {
    try {
        const res = await axios.patch(`http://127.0.0.1:8000/api/todos/${id}/`, payload);
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