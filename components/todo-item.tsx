export interface Todo {
  id: number
  title: string
  completed: boolean
}

export default function TodoItem({
  todo,
  onChange,
  onDelete
}: {
  todo: Todo,
  onChange: (todo: Todo) => void,
  onDelete: (id: number) => void
}) {
  return (
    <div className="flex">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={e => onChange({...todo, completed: e.target.checked})}
      />
      {todo.title}
      <button
        type="button"
        className="ml-auto"
        onClick={() => onDelete(todo.id)}
      >
        删除
      </button>
    </div>
  )
}
