import TodoItem, {Todo} from '@/components/todo-item'

export default function TodoList({
  todos,
  onChangeTodo,
  onDeleteTodo
}: {
  todos: Todo[],
  onChangeTodo: (todo: Todo) => void,
  onDeleteTodo: (id: number) => void
}) {
  return (
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>
          <TodoItem todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo}/>
        </li>
      )}
    </ul>
  )
}
