interface TodoItemProps {
  todo: string;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <span className="font-medium">
      <p>{ todo }</p>
    </span>
  )
}

export { TodoItem };