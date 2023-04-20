'use client'
import {useState} from 'react'
import TodoForm from '@/components/todo-form'
import TodoList from '@/components/todo-list'
import {Todo} from '@/components/todo-item'

const initialTodos: Todo[] = [
  {id: 0, title: '学习React', completed: true},
  {id: 1, title: '准备午饭', completed: false},
  {id: 2, title: '出超市购物', completed: false},
]
let nextId = 3

export default function TodoApp() {

  const [todos, setTodos] = useState(initialTodos)
  const handleAddTodo = (text: string) => {
    setTodos([...todos, {id: nextId++, title: text, completed: false}])
  }

  const handleChangeTodo = (todo: Todo) => {
    setTodos(todos.map(t => t.id === todo.id ? todo : t))
  }

  const handleDeleteTodo = (id:number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="flex flex-col w-[300px]">
      <TodoForm onAddTodo={handleAddTodo}/>
      <TodoList todos={todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo}/>
    </div>
  )
}
