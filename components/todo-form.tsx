import {useState} from 'react'

export default function TodoForm({
  onAddTodo
}: {
  onAddTodo: (text: string) => void
}) {
  const [text, setText] = useState('')
  return (
    <div className="flex flex-row gap-1">
      <input
        type="text"
        placeholder="添加todo"
        className="border flex-auto"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        type="button"
        className="bg-slate-900 hover:bg-slate-700 text-white px-3 py-1"
        onClick={() => {
          if (text !== '') {
            onAddTodo(text)
            setText('')
          }
        }}
      >
        添加
      </button>
    </div>
  )
}
